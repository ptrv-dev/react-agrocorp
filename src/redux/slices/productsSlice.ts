import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

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
export const fetchProducts = createAsyncThunk<ProductItemType[]>(
	'products/fetchData',
	async () => {
		const data = await fetch('/json/products.json').then((result) =>
			result.json()
		);
		return data;
	}
);

interface IProducts {
	items: ProductItemType[];
}

const initialState: IProducts = {
	items: [],
};

export const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchProducts.fulfilled,
			(state, action: PayloadAction<ProductItemType[]>) => {
				state.items = action.payload;
			}
		);
		builder.addCase(fetchProducts.pending, (state) => {
			state.items = [];
		});
		builder.addCase(fetchProducts.rejected, (state) => {
			state.items = [];
		});
	},
});

export default productsSlice.reducer;
