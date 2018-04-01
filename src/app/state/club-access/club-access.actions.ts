import { Action } from '@ngrx/store';
import { ClubAcces } from './club-access.state';

export enum ClubAccessActionTypes {
    SELECT_CLUB_ACCESS = 'CLUB_ACCESS/SELECT_CLUB_ACCESS',
    SET_CLUB_ACCESSES = 'CLUB_ACCESS/SET_CLUB_ACCESSES'
}

export class SelectedClubAccess implements Action {
    readonly type = ClubAccessActionTypes.SELECT_CLUB_ACCESS;

    constructor(public payload: number) {}
}

export class SetClubAccesses implements Action {
    readonly type = ClubAccessActionTypes.SET_CLUB_ACCESSES;

    constructor(public payload: ClubAcces[]) {
        
    }
}

export type ClubAccessAction = 
    | SelectedClubAccess
    | SetClubAccesses;