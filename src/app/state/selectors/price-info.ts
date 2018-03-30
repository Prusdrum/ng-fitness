import { createSelector } from '@ngrx/store';
import { getBasePrice, getMinPrice } from '../price/price.selectors';
import { getSelectedClubAccess } from './club-accesses';

export interface PriceInfo {
    totalPrice: number;
    isMinPrice: boolean;
}

export const getPriceInfo = createSelector(
    getBasePrice, getMinPrice, getSelectedClubAccess,
    (basePrice, minPrice, selectedClubAccess) => {
        const total: number = basePrice;
        return {
            totalPrice: total + selectedClubAccess.price,
            isMinPrice: total <= minPrice
        } as PriceInfo;
    }
)