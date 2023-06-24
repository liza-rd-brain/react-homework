import { configureStore } from "@reduxjs/toolkit";
/* import { cartReducer, cartSlice } from './feature/cart'; */
import { movieApi } from "./api/movieApi";

export const store = configureStore({
  reducer: {
    /*     cart: cartReducer, */
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware]),
  devTools: process.env.NODE_ENV !== "production"
});


/* console.log("store", store.getState()) */
