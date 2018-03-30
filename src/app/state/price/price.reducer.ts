import { Action } from '@ngrx/store';
import { PriceState } from './price.state';

const defaultState: PriceState = {
    basePrice: 299,
    minPrice: 299
}

export function priceReducer(state: PriceState = defaultState, action: Action) {
    switch (action.type) {
        default:
            return state;
    }
}