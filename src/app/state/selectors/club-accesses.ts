import { createSelector } from '@ngrx/store';
import { getClubAccesses as _getClubAccesses, getSelectedClubAccessId } from '../club-access/club-access.selectors'; 
import { ClubAcces } from '../club-access/club-access.state';
import { getPriceInfo } from './price-info';

export interface ClubAccessBlock extends ClubAcces {
    isSelected: boolean;
    priceDiff: number;
}

export const getSelectedClubAccess = createSelector(
    _getClubAccesses,
    getSelectedClubAccessId,
    (clubAccesses, id) => clubAccesses.find(c => c.id === id)
)

export const getClubAccesses = createSelector(
    _getClubAccesses, getSelectedClubAccessId,
    (clubAccesses, id) => {
        return clubAccesses.map(clubAccess => {
            return {
                ...clubAccess,
                isSelected: clubAccess.id === id,
                priceDiff: clubAccess.price 
            } as ClubAccessBlock;
        });
    }
)