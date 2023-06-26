import { StoreType } from "@/business/store";

const selectCartModule = (state: StoreType) => state.cart;

export const selectProductAmount = (state: StoreType, id: string) =>
  selectCartModule(state)[id] || 0;
