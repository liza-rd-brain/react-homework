import { StoreType } from "@/business/store";

const selectCartModule = (state: StoreType) => state.cart;

//TODO: smthg with type
export const selectProductAmount = (state: StoreType, id: string) =>
  // @ts-ignore
  selectCartModule(state)[id] || 0;
