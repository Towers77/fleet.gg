import { createFileRoute } from '@tanstack/react-router';
import { NavBar } from '../../components/NavBar';

export const Route = createFileRoute('/home')({
	component: Home,
});

function Home() {
	return (
		<>
			<NavBar />
			<main className="grid grid-cols-10">
				<div className="col-span-7">main content</div>
				<div className="col-span-3">weapon dict</div>
			</main>
		</>
	);
}
