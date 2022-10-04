import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import data from '../../json/reviews.json';

export type ReviewsItemType = {
	id: number;
	imageUrl: string;
	name: string;
	text: string;
};

const initialState: ReviewsItemType[] = data;

export const reviewsSlice = createSlice({
	name: 'salesHit',
	initialState,
	reducers: {
		setReviews: (state, action: PayloadAction<ReviewsItemType[]>) => {
			state = action.payload;
		},
	},
});

export const { setReviews } = reviewsSlice.actions;

export default reviewsSlice.reducer;
