import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
	contactUsPopUp: false,
};

export const popUpSlice = createSlice({
	name: 'popUp',
	initialState,
	reducers: {
		setContactUsPopUp: (state, action: PayloadAction<boolean>) => {
			state.contactUsPopUp = action.payload;
		},
	},
});

export const { setContactUsPopUp } = popUpSlice.actions;

export default popUpSlice.reducer;
