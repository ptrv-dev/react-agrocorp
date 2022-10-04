import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import data from '../../json/salesHit.json';

export type SalesHitItemType = {
	id: number;
	categoryId: number;
	title: string;
	description: string;
};

const initialState: SalesHitItemType[] = data;

export const salesHitSlice = createSlice({
	name: 'salesHit',
	initialState,
	reducers: {
		setSalesHit: (state, action: PayloadAction<SalesHitItemType[]>) => {
			state = action.payload;
		},
	},
});

export const { setSalesHit } = salesHitSlice.actions;

export default salesHitSlice.reducer;
