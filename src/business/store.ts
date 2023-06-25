import { configureStore } from "@reduxjs/toolkit";
/* import { cartReducer, cartSlice } from './feature/cart'; */
import { movieApi } from "./api/movieApi";
import { cinemaApi } from "./api/cinemaApi";
import { filterSlice } from "./feature/filter";

export const store = configureStore({
  reducer: {
    [filterSlice.name]: filterSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware, //
      cinemaApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production",
});

/* console.log("store", store.getState()) */
export type StoreType = ReturnType<typeof store.getState>;
