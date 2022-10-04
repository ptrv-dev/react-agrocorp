import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import data from '../../json/products.json';

export type ProductItemType = {
	id: number;
	categoryId: number;
	title: string;
	description: string;
	footer: string;
	table: string[][];
	price: number;
	imageCount: number;
};

const initialState: ProductItemType[] = data;

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setProducts: (state, action: PayloadAction<ProductItemType[]>) => {
			state = action.payload;
		},
	},
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
