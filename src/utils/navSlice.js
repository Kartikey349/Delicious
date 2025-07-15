import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
    name: "nav",
    initialState: {
        isOpenNav: false,
    },

    reducers: {
        toggleNav: (state) => {
            state.isOpenNav = !state.isOpenNav;
        }
    }
})

export const {toggleNav} = navSlice.actions;
export default navSlice.reducer;