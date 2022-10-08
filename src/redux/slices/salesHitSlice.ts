import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SalesHitItemType = {
	id: number;
	categoryId: number;
};

interface ISalesHitState {
	items: SalesHitItemType[];
}

const initialState: ISalesHitState = {
	items: [],
};

export const fetchSalesHit = createAsyncThunk<SalesHitItemType[]>(
	'salesHit/fetchCatalog',
	async () => {
		const data = await fetch('/json/salesHit.json').then((result) =>
			result.json()
		);
		return data;
	}
);

export const salesHitSlice = createSlice({
	name: 'salesHit',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchSalesHit.fulfilled,
			(state, action: PayloadAction<SalesHitItemType[]>) => {
				state.items = action.payload;
			}
		);
		builder.addCase(fetchSalesHit.pending, (state) => {
			state.items = [];
		});
		builder.addCase(fetchSalesHit.rejected, (state) => {
			state.items = [];
		});
	},
});

export default salesHitSlice.reducer;
