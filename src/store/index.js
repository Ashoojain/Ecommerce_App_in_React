import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./Cart-slice";

const store = configureStore ( {
    reducer:   CartSlice.reducer
});

export default store;