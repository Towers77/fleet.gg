import { createFileRoute, Link } from '@tanstack/react-router';
import { useSessionStore } from '../../stores/sessionStore';
import { useQuery } from '@tanstack/react-query';
import { getTokensFn } from '../../utils/authFuncs';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { getLinkedProfiles } from 'bungie-api-ts/destiny2';
import auth from '../../utils/axiosAuth';
import { useServerFn } from '@tanstack/react-start';
import { ProfileIcon } from '../../components/ProfileIcon';

type HomeSearch = {
	code: string;
};

export const Route = createFileRoute('/home/profiles')({
	validateSearch: (search: Record<string, unknown>): HomeSearch => {
		return search as HomeSearch;
	},
	component: Profiles,
});

function Profiles() {
	const session = useSessionStore((state) => state);
	const getTokens = useServerFn(getTokensFn);
	const { code } = Route.useSearch();

	const sessionQuery = useQuery({
		queryKey: ['sessionData'],
		queryFn: async () => {
			const res = await getTokens({ data: code });

			session.setToken({
				access_token: res.result.access_token,
				expires_in: res.result.expires_in,
			});
			session.setMembershipId(res.result.membership_id);

			return res.result;
		},
		enabled: !!code,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	});

	const profilesQuery = useQuery({
		queryKey: ['profiles'],
		queryFn: async () => {
			const res = await getLinkedProfiles(auth, {
				membershipType: 254,
				membershipId: session.bungie_membership_id,
			});

			res.Response.profiles.forEach((profile) => {
				if (
					session.profiles.some((p) => p.membership_id === profile.membershipId)
				)
					return;

				session.addProfile({
					membership_id: profile.membershipId,
					display_name: profile.displayName,
					type: profile.membershipType,
				});
			});

			return res.Response.profiles;
		},
		enabled: !!sessionQuery.data?.membership_id,
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	});

	if (profilesQuery.isPending) {
		return <LoadingSpinner />;
	}

	return (
		<div className="flex flex-col p-10 bg-slate-900/50 shadow-xl gap-6">
			<span className="text-lg underline underline-offset-3 decoration-2">
				Please select a profile:
			</span>
			{session.profiles.map((profile) => (
				<Link
					className="flex items-center gap-3 border-2 border-white p-4 shadow-lg hover:scale-102 transition-all duration-150 text-xl min-w-lg"
					to={`/home/$membershipId/inventory`}
					params={{ membershipId: profile.membership_id }}
					key={profile.membership_id}
				>
					<ProfileIcon type={profile.type} />
					{profile.display_name}
				</Link>
			))}
		</div>
	);
}
