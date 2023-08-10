import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
    reset: () => initialState, // reset the state to the initial value
  },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
