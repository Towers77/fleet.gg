import { useQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { getProfile } from 'bungie-api-ts/destiny2';
import auth from '../../../utils/axiosAuth';
import { PROFILE_COMPONENTS } from '../../../utils/consts';

export const Route = createFileRoute('/home/$membershipId/inventory')({
	component: Inventory,
});

function Inventory() {
	const membershipId = Route.useParams().membershipId;
	const membershipType = window.localStorage.getItem(
		'selected_membership_type'
	);

	const profileDataQuery = useQuery({
		queryKey: ['profileData'],
		queryFn: async () => {
			const res = await getProfile(auth, {
				components: PROFILE_COMPONENTS,
				membershipType: Number(membershipType),
				destinyMembershipId: membershipId,
			});
		},
		refetchOnWindowFocus: false,
		refetchOnMount: false,
	});

	return <div className="w-full h-full flex flex-col"></div>;
}
