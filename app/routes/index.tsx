import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	return <div className="bg-red-200"> Hello World</div>;
}
