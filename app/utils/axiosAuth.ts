import axios from 'axios';
import { useSessionStore } from '../stores/sessionStore';
import { BASE_URL } from './consts';
import { refreshTokenFn } from './authFuncs';

let session = useSessionStore.getState();

const auth = axios.create({
	baseURL: BASE_URL,
	headers: {
		'X-API-Key': import.meta.env.VITE_API_KEY,
		Authorization: 'Bearer ' + session.access_token,
	},
});

auth.interceptors.request.use(async (req) => {
	session = useSessionStore.getState();
	console.log(session.access_token);
	if (session.access_token !== '') {
		const isExpired = session.expires_in < Date.now() / 1000;
		if (!isExpired) return req;
	}

	const res = await refreshTokenFn();

	session.setToken({
		access_token: res.result.access_token,
		expires_in: res.result.expires_in,
	});
	req.headers.Authorization = 'Bearer ' + res.result.access_token;

	return req;
});

auth.interceptors.response.use((response) => response.data);

export default auth;
