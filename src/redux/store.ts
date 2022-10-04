import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import catalogReducer from './slices/catalogSlice';
import salesHitReducer from './slices/salesHitSlice';

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
		salesHit: salesHitReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
