import { createSlice } from "@reduxjs/toolkit";

export type StateType = Record<string, number>;
const initialState: StateType = {};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, { payload }) => {
      console.log("incremrnt", payload);
      const count = state[payload] || 0;
      state[payload] = count + 1;
    },
    decrement: (state, { payload }) => {
      const count = state[payload];

      if (!count) {
        return;
      }

      if (count === 1) {
        delete state[payload];
        return;
      }

      state[payload] = count - 1;
    },
    reset: (state, { payload }) => {
      state[payload] = 0;
    },
  },
});

export const cartActions = cartSlice.actions;
