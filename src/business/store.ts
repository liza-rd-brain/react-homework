import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  PersistConfig,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { cartSlice } from "./feature/cart";
import { movieApi } from "./api/movieApi";
import { cinemaApi } from "./api/cinemaApi";
import { filterSlice } from "./feature/filter";
import { reviewsApi } from "./api/reviewsApi";

const reducers = combineReducers({
  [cartSlice.name]: cartSlice.reducer,
  [filterSlice.name]: filterSlice.reducer,
  [movieApi.reducerPath]: movieApi.reducer,
  [cinemaApi.reducerPath]: cinemaApi.reducer,
  [reviewsApi.reducerPath]: reviewsApi.reducer,
});

const persistConfig: PersistConfig<ReturnType<typeof reducers>> = {
  key: "root",
  version: 1,
  storage,
  whitelist: [
    cartSlice.name, //
    filterSlice.name,
  ],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat([
      movieApi.middleware, //
      cinemaApi.middleware,
      reviewsApi.middleware,
    ]),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export type StoreType = ReturnType<typeof reducers>;
