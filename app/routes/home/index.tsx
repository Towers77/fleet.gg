import { createFileRoute } from '@tanstack/react-router';
import { AUTH_URL } from '../../utils/consts';

export const Route = createFileRoute('/home/')({
	component: HomeIndex,
});

function HomeIndex() {
	const handleAuthorize = () => {
		window.location.href = `${AUTH_URL}?client_id=${import.meta.env.VITE_CLIENT_ID}&response_type=code`;
	};
	return (
		<div className="flex flex-col p-10 bg-slate-900/50 shadow-xl max-w-2xl gap-6 h-fit">
			<div className="divide-y-2 divide-white flex flex-col items-center text-center gap-3">
				<h3 className="text-2xl">WE NEED YOUR AUTHORIZATION</h3>
				<span className="text-white/85">
					You need to authorize this app from your Bungie account to use the
					inventory manager
				</span>
			</div>
			<button
				onClick={handleAuthorize}
				className="hover:cursor-pointer hover:scale-105 self-center active:scale-100 shadow-xl transition-all duration-150 bg-amber-400 py-3 px-10 text-lg text-slate-700 font-semibold outline-1 outline-amber-400 hover:outline-offset-3 w-fit"
			>
				AUTHORIZE
			</button>
		</div>
	);
}
