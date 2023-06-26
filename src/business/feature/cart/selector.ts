import { StoreType } from "@/business/store";

const selectCartModule = (state: StoreType) => state.cart;

export const selectTicketAmount = (state: StoreType, id: string) =>
  selectCartModule(state)[id] || 0;

export const selectAllTicket = (state: StoreType) => {
  const allInCart = selectCartModule(state);
  const allInCartArr = Object.values(allInCart);
  const summ = allInCartArr.reduce((prev, item) => prev + item);
  return summ;
};
