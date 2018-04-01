import { Action } from '@ngrx/store';

export enum SetupActionTypes {
    LOAD_SETUP = 'SETUP/LOAD_SETUP',
    SETUP_LOADED = 'SETUP/SETUP_LOADED'
};

export class LoadSetup implements Action {
    readonly type = SetupActionTypes.LOAD_SETUP

    constructor() {}
}

export class SetupLoaded implements Action {
    readonly type = SetupActionTypes.SETUP_LOADED

    constructor() {

    }
}

export type SetupActions = 
    | LoadSetup
    | SetupLoaded;