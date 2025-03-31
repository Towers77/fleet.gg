import { create } from 'zustand';

type sessionStore = {
	access_token: string;
	expires_in: number;
	bungie_membership_id: string;
	profiles: Array<{
		membership_id: string;
		display_name: string;
		type: number;
	}>;
	setToken: (token: { access_token: string; expires_in: number }) => void;
	setMembershipId: (id: string) => void;
	addProfile: (profile: {
		membership_id: string;
		display_name: string;
		type: number;
	}) => void;
};

export const useSessionStore = create<sessionStore>((set) => ({
	access_token: '',
	expires_in: 0,
	bungie_membership_id: '',
	profiles: [],
	setToken: (token) =>
		set({ access_token: token.access_token, expires_in: token.expires_in }),
	setMembershipId: (id) => set({ bungie_membership_id: id }),
	addProfile: (profile) =>
		set((state) => ({ profiles: [...state.profiles, profile] })),
}));
