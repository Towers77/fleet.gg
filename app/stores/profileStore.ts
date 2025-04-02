import {
	DestinyCharacterComponent,
	DestinyItemComponent,
	DestinyItemInstanceComponent,
} from 'bungie-api-ts/destiny2';
import { create } from 'zustand';

type Inventory = {
	equiped: DestinyItemComponent;
	items: DestinyItemComponent[];
};

type Character = DestinyCharacterComponent & {
	weapons: {
		kinetic: Inventory;
		energy: Inventory;
		power: Inventory;
	};
};

type profileStore = {
	characters: Character[];
	itemInstances: DestinyItemInstanceComponent[];
	currencies: DestinyItemComponent[];
	vault: DestinyItemComponent[];
	addCharacter: (character: Character) => void;
	setItemInstances: (itemInstances: DestinyItemInstanceComponent[]) => void;
	setCurrencies: (currencies: DestinyItemComponent[]) => void;
	setVault: (vault: DestinyItemComponent[]) => void;
};

export const useProfileStore = create<profileStore>((set) => ({
	characters: [],
	itemInstances: [],
	currencies: [],
	vault: [],
	addCharacter: (character) =>
		set((state) => ({ characters: [...state.characters, character] })),
	setItemInstances: (itemInstances) => set({ itemInstances: itemInstances }),
	setCurrencies: (currencies) => set({ currencies: currencies }),
	setVault: (vault) => set({ vault: vault }),
}));
