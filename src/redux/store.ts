import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import catalogReducer from './slices/catalogSlice';
import salesHitReducer from './slices/salesHitSlice';
import reviewsReducer from './slices/reviewsSlice';

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		salesHit: salesHitReducer,
		reviews: reviewsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
