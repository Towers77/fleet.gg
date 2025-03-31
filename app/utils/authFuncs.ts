import { createServerFn } from '@tanstack/react-start';
import { redirect } from '@tanstack/react-router';
import axios, { AxiosError } from 'axios';
import { BASE_URL } from './consts';
import { getCookie, setHeader } from '@tanstack/react-start/server';

export interface SessionData {
	access_token: string;
	token_type: string;
	expires_in: number;
	refresh_token: string;
	refresh_expires_in: number;
	membership_id: string;
}

export const getTokensFn = createServerFn({ response: 'full' })
	.validator((code: string) => code)
	.handler(async ({ data }) => {
		try {
			const res = await axios.post<SessionData>(
				`${BASE_URL}/app/oauth/token/`,
				{
					client_id: process.env.VITE_CLIENT_ID,
					client_secret: process.env.CLIENT_SECRET,
					grant_type: 'authorization_code',
					code: data,
				},
				{
					headers: {
						'Content-Type': 'application/x-www-form-urlencoded',
					},
				}
			);

			setHeader(
				'Set-Cookie',
				`refresh_token=${res.data.refresh_token}; HttpOnly; SameSite=Strict; Secure ; Max-Age=${res.data.refresh_expires_in}`
			);

			return {
				access_token: res.data.access_token,
				expires_in: Date.now() / 1000 + res.data.expires_in,
				membership_id: res.data.membership_id,
			};
		} catch (error) {
			throw redirect({ to: '/home' });
		}
	});

export const refreshTokenFn = createServerFn({ response: 'full' }).handler(
	async () => {
		const refresh_token = getCookie('refresh_token');

		const res = await axios.post<SessionData>(
			`${BASE_URL}/app/oauth/token/`,
			{
				client_id: process.env.VITE_CLIENT_ID,
				client_secret: process.env.CLIENT_SECRET,
				grant_type: 'refresh_token',
				refresh_token: refresh_token,
			},
			{
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
				},
			}
		);

		setHeader(
			'Set-Cookie',
			`refresh_token=${res.data.refresh_token}; HttpOnly; SameSite=Strict; Secure ; Max-Age=${res.data.refresh_expires_in}`
		);

		return {
			access_token: res.data.access_token,
			expires_in: Date.now() / 1000 + res.data.expires_in,
		};
	}
);
