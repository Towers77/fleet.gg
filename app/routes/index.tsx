import { createFileRoute, useNavigate } from '@tanstack/react-router';
import { Icon } from '../components/Icon';

export const Route = createFileRoute('/')({
	component: Start,
});

function Start() {
	const navigate = useNavigate({ from: '/' });

	return (
		<div className="flex flex-col gap-6 items-center justify-center my-32">
			<Icon styles="w-48 h-48 fill-white drop-shadow-xl" />
			<div className="flex flex-col items-center gap-2">
				<h1 className="text-4xl font-black">FLEET.GG</h1>
				<h3 className="text-lg">Your items, everywhere.</h3>
			</div>
			<button
				onClick={() => navigate({ to: '/home' })}
				className="hover:cursor-pointer hover:scale-105 active:scale-100 shadow-xl transition-all duration-150 bg-amber-400 py-3 px-10 text-xl text-slate-700 font-semibold outline-1 outline-amber-400 hover:outline-offset-3"
			>
				LAUNCH FLEET
			</button>
		</div>
	);
}
