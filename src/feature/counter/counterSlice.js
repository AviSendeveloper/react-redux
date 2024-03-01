import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        // all states
        count: 0, // count = state.count when we will access it's value
    },
    reducers: {
        // all actions/reducers
        increment: (state) => {
            state.count += 1; // as mension before count value = state.count
        },
        decrement: (state) => {
            state.count -= 1;
        },
        addAmount: (state, action) => {
            state.count += action.payload;
        },
        reset: (state) => {
            state.count = 0;
        },
    },
});

export const { increment, decrement, reset, addAmount } = counterSlice.actions;

export default counterSlice.reducer;
