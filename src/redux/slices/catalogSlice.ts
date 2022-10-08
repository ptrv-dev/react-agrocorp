import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CatalogItemType = {
	id: number;
	imageUrl: string;
	title: string;
};

interface ICatalogState {
	items: CatalogItemType[];
}

export const fetchCatalog = createAsyncThunk<CatalogItemType[]>(
	'catalog/fetchCatalog',
	async () => {
		const data = await fetch('/json/catalog.json').then((result) =>
			result.json()
		);
		return data;
	}
);

const initialState: ICatalogState = {
	items: [],
};

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchCatalog.fulfilled,
			(state, action: PayloadAction<CatalogItemType[]>) => {
				state.items = action.payload;
			}
		);
		builder.addCase(fetchCatalog.pending, (state) => {
			state.items = [];
		});
		builder.addCase(fetchCatalog.rejected, (state) => {
			state.items = [];
		});
	},
});

export default catalogSlice.reducer;
