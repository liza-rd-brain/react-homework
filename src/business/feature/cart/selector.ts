import { createSelector } from "@reduxjs/toolkit";
import { StoreType } from "@/business/store";

const selectCartModule = (state: StoreType) => state.cart;

export const selectTicketAmount = createSelector(
  [
    selectCartModule, //
    (_: StoreType["cart"], id: string) => id,
  ],
  (s, id) => s[id] || 0
);

export const selectAllTicket = createSelector(
  selectCartModule, //
  (allInCart) => {
    const allInCartArr = Object.values(allInCart);
    const summ =
      allInCartArr.length && allInCartArr.reduce((prev, item) => prev + item);
    return summ;
  }
);

//достать id
export const selectTicketInCart = createSelector(
  selectCartModule, //
  (allInCart) => {
    const movieIdArr = Object.keys(allInCart);
    return movieIdArr;
  }
);
