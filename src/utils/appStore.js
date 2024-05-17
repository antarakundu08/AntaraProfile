import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./slice/videoSlice";
import navReducer from "./slice/navSlice";

const appStore = configureStore({
    reducer : {
        video: videoReducer,
        nav: navReducer,
    }
});

export default appStore;