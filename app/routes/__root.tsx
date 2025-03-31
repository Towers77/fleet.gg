import type { ReactNode } from 'react';
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from '@tanstack/react-router';
import css from '../index.css?url';
import favicon from '../../destiny-icons/general/arrivals.svg?url';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: 'utf-8',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
			{
				title: 'Fleet.gg',
			},
		],
		links: [
			{
				rel: 'stylesheet',
				href: css,
			},
			{
				rel: 'icon',
				href: favicon,
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.googleapis.com',
			},
			{
				rel: 'preconnect',
				href: 'https://fonts.gstatic.com',
				crossOrigin: 'anonymous',
			},
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Fira+Code:wght@300..700&display=swap',
			},
		],
	}),
	component: RootComponent,
});

const queryClient = new QueryClient();

function RootComponent() {
	return (
		<RootDocument>
			<QueryClientProvider client={queryClient}>
				<Outlet />
			</QueryClientProvider>
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 text-white font-[Fira_Code] h-screen">
				{children}

				<Scripts />
			</body>
		</html>
	);
}
