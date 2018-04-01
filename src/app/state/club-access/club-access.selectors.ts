import { AppState } from '../app.state';

export const getClubAccesses = (state: AppState) => state.clubAccess.clubAccesses;
export const getSelectedClubAccessId = (state: AppState) => state.clubAccess.selectedClubAccessId;