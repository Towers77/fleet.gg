import { Link, useParams, useRouterState } from '@tanstack/react-router';
import { Icon } from './Icon';

export const NavBar = () => {
	const routerState = useRouterState();
	const { membershipId } = useParams({ strict: false });

	return (
		<div className="flex gap-2 p-3 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 fixed w-full z-50">
			<Link to="/" className="flex items-center gap-2">
				<Icon styles="w-8 h-8 fill-white drop-shadow-xl" />
				<h3 className="text-lg font-bold"> FLEET.GG</h3>
			</Link>
			<div className="flex items-center mx-4 text-sm gap-6 underline-offset-6">
				<Link
					className={`select-none transition-all duration-150 ${membershipId ? 'hover:text-amber-400' : 'text-white/50 pointer-events-none'} ${routerState.location.pathname.includes('/inventory') && 'underline text-amber-400'} decoration-2`}
					to="/home/$membershipId/inventory"
					params={{ membershipId: membershipId || '' }}
				>
					inventory
				</Link>
			</div>
		</div>
	);
};
