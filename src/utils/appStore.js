import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
import navReducer from "./navSlice"


const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        nav: navReducer,
    }
});

export default appStore;