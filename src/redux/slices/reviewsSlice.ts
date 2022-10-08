import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ReviewsItemType = {
	id: number;
	imageUrl: string;
	name: string;
	text: string;
};

interface IReviewsState {
	items: ReviewsItemType[];
}

const initialState: IReviewsState = {
	items: [],
};

export const fetchReviews = createAsyncThunk<ReviewsItemType[]>(
	'reviews/fetchCatalog',
	async () => {
		const data = await fetch('/json/reviews.json').then((result) =>
			result.json()
		);
		return data;
	}
);

export const reviewsSlice = createSlice({
	name: 'reviews',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(
			fetchReviews.fulfilled,
			(state, action: PayloadAction<ReviewsItemType[]>) => {
				state.items = action.payload;
			}
		);
		builder.addCase(fetchReviews.pending, (state) => {
			state.items = [];
		});
		builder.addCase(fetchReviews.rejected, (state) => {
			state.items = [];
		});
	},
});

export default reviewsSlice.reducer;
