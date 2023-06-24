import { StateType, initialState } from '@/business/initialState';
import { createSlice } from '@reduxjs/toolkit';

/* export type StateType = Record<any, any> */

/* 
export const cartSlice = createSlice({
    name: "cart", initialState,
    reducers: {
        increment: (state, { payload }: { payload: string }) => {
            const hasFilm = state.ticketAmount;
            state[payload] = count + 1;

        },
        decrement: (state, { payload }: { payload: string }) => {
            const count = state[payload];
            if (!count) {
                return
            }
            if (count === 1) {
                delete state[payload]
                return
            }
            state[payload] = count - 1;


        },
        reset: () => initialState


    }
}
);


export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions */