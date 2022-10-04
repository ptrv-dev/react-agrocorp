import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import catalogReducer from './slices/catalogSlice';

export const store = configureStore({
	reducer: {
		catalog: catalogReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<typeof store.dispatch>();
