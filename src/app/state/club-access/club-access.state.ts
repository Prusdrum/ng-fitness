export enum ClubAccesType {
    OneClub, TwoClub, City, Country, Nordic
}

export interface ClubAcces {
    id: number;
    name: string;
    price: number;
    clubAccessType: ClubAccesType
}

export interface ClubAccessState {
    selectedClubAccessId: number;
    clubAccesses: ClubAcces[];
}