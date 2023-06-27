import { createSlice } from "@reduxjs/toolkit";

export type StateType = {
  nameFilter: string | null;
  genreFilter: { name: string | null };
  cinemaFilter: { name: string | null; id: string } | null;
};

export const initialState: StateType = {
  nameFilter: null,
  genreFilter: { name: null },
  cinemaFilter: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    filterByName: (state, { payload }: { payload: string | null }) => {
      state.nameFilter = payload ? payload : null;
    },
    filterByGenre: (
      state,
      { payload }: { payload: { name: string } | null }
    ) => {
      state.genreFilter.name = payload ? payload.name : null;
    },
    filterByCinema: (
      state,
      { payload }: { payload: { name: string; id: string } | null }
    ) => {
      state.cinemaFilter = payload;
      //делаем фильтрацию по кинотеатру
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const filterActions = filterSlice.actions;
