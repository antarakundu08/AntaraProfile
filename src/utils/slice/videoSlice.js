import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: 'video',
    initialState: {
        videoState: true
    },
    reducer: {
        changeVideoState(state, action) {
            state.videoState = false;
        }
    }
});

export const {changeVideoState} = videoSlice.actions;

export default videoSlice.reducer;