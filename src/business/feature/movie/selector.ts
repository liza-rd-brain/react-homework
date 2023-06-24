import { StateType } from '@/business/initialState'


export const selectMovieList = (state: StateType) => state.movieList

/**
 * нет продукта - ставим 0
 */
/* export const selectProductAmount = (state: StateType, id: string) => selectCartModule(state)[id] || 0 */