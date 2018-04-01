import { AppState } from '../app.state';

export const getMinPrice = (state: AppState) => state.price.minPrice;
export const getBasePrice = (state: AppState) => state.price.basePrice;