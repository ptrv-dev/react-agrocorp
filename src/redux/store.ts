import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import productsReducer from './slices/productsSlice';
import catalogReducer from './slices/catalogSlice';
import salesHitReducer from './slices/salesHitSlice';
import reviewsReducer from './slices/reviewsSlice';
import popUpReducer from './slices/popUpSlice';

export const store = configureStore({
	reducer: {
		products: productsReducer,
		catalog: catalogReducer,
		salesHit: salesHitReducer,
		reviews: reviewsReducer,
		popUp: popUpReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
