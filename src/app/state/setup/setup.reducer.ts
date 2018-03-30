import { SetupState } from './setup.state';
import { SetupActionTypes, SetupActions } from './setup.actions';

const defaultState: SetupState = {
    initialized: false,
    loading: true
}

export function setupReducer(state: SetupState = defaultState, action: SetupActions) {
    switch (action.type) {
        case SetupActionTypes.SETUP_LOADED: {
            return {
                ...state,
                loading: false,
                initialized: true
            }
        }
        default: {
            return state;
        }
    } 
}