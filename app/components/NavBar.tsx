import { Link } from '@tanstack/react-router';
import { Icon } from './Icon';

export const NavBar = () => {
	return (
		<div className="flex gap-4 m-3">
			<Link to="/" className="flex items-center gap-2">
				<Icon styles="w-10 h-10 fill-white drop-shadow-xl" />
				<h3 className="text-xl font-bold"> FLEET.GG</h3>
			</Link>
			<div className="flex items-center mx-4 text-sm">
				<Link
					className="hover:text-amber-400 transition-all duration-150"
					to="/home"
				>
					inventory
				</Link>
			</div>
		</div>
	);
};
