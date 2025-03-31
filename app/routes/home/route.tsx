import { createFileRoute, Outlet } from '@tanstack/react-router';
import { NavBar } from '../../components/NavBar';

export const Route = createFileRoute('/home')({
	component: Home,
});

function Home() {
	return (
		<>
			<NavBar />
			<main className="grid grid-cols-10 h-full pt-[56px]">
				<div className="col-span-7 flex justify-center items-center h-full">
					<Outlet />
				</div>
				<div className="col-span-3 bg-slate-900/75 shadow-xl">weapon dict</div>
			</main>
		</>
	);
}
