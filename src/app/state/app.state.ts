import { PriceState } from './price/price.state';
import { priceReducer  } from './price/price.reducer'; 
import { ClubAccessState } from './club-access/club-access.state';
import { clubAccessReducer } from './club-access/club-access.reducer';
import { setupReducer } from './setup/setup.reducer';
import { SetupState } from './setup/setup.state';

export interface AppState {
    price: PriceState;
    clubAccess: ClubAccessState;
    setup: SetupState;
}

export function createRootReducer () {
    return {
        price: priceReducer,
        clubAccess: clubAccessReducer,
        setup: setupReducer
    };
}