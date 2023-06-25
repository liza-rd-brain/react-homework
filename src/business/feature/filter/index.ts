import { FilterType } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

/* export type StateType = Record<any, any> */

export type StateType = {
  nameFilter: string | null;
  genreFilter: string | null;
  cinemaFilter: string | null;
};

export const initialState: StateType = {
  nameFilter: null,
  genreFilter: null,
  cinemaFilter: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByName: (state, { payload }: { payload: FilterType | null }) => {},
    filterByGenre: (state, { payload }: { payload: FilterType | null }) => {
      state.genreFilter = payload;
    },
    filterByCinema: (state, { payload }: { payload: FilterType | null }) => {
      //делаем фильтрацию по кинотеатру
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
