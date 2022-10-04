import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import data from '../../json/catalog.json';

export type CatalogItemType = {
	id: number;
	imageUrl: string;
	title: string;
};

const initialState: CatalogItemType[] = data;

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		setCatalog: (state, action: PayloadAction<CatalogItemType[]>) => {
			state = action.payload;
		},
	},
});

export const { setCatalog } = catalogSlice.actions;

export default catalogSlice.reducer;
