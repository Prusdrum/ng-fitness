import { ClubAccessState, ClubAccesType } from './club-access.state';
import { ClubAccessActionTypes, ClubAccessAction } from './club-access.actions';

const defaultState: ClubAccessState = {
    selectedClubAccessId: 0,
    clubAccesses: [
        
    ]
}

export function clubAccessReducer(state: ClubAccessState = defaultState, action: ClubAccessAction) {
    switch (action.type) {
        case ClubAccessActionTypes.SELECT_CLUB_ACCESS: {
            return {
                ...state,
                selectedClubAccessId: action.payload
            }
        }
        case ClubAccessActionTypes.SET_CLUB_ACCESSES: {
            return {
                ...state,
                clubAccesses: [...action.payload]
            }
        }
        default: {
            return state;
        }
    }
}