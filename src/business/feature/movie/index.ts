import { createSlice } from "@reduxjs/toolkit";

/* export type StateType = Record<any, any> */

export type StateType = {
  currMovieId: null | string;
};

export const initialState: StateType = {
  currMovieId: null,
};

export const filterSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovie: (state, { payload }: { payload: string | null }) => {
      console.log("payload", payload);
      state.currMovieId = payload ? payload : null;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
