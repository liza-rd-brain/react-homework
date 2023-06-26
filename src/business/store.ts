import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./feature/cart";
import { movieApi } from "./api/movieApi";
import { cinemaApi } from "./api/cinemaApi";
import { filterSlice } from "./feature/filter";
import { reviewsApi } from "./api/reviewsApi";

export const store = configureStore({
  reducer: {
    [cartSlice.name]: cartSlice.reducer,
    [filterSlice.name]: filterSlice.reducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [cinemaApi.reducerPath]: cinemaApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      movieApi.middleware, //
      cinemaApi.middleware,
      reviewsApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production",
});

/* console.log("store", store.getState()) */
export type StoreType = ReturnType<typeof store.getState>;
