import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: {
        isOpenNav: false,
    },

    reducers: {
        toggleNav: (state) => {
            state.isOpenNav = !state.isOpenNav;
        },
        navClose: (state) => {
            state.isOpenNav = false;
        }
    }
})

export const {toggleNav, navClose} = navSlice.actions;
export default navSlice.reducer;