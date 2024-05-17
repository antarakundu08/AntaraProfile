import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: 'nav',
    initialState: {
        showNavSelection: null,
    },
    reducers: {
        changeNavState : (state, action) => {
            state.showNavSelection = action.payload
        }
    }
});

export const {changeNavState} = navSlice.actions;

export default navSlice.reducer;