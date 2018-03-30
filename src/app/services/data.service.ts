import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';
import { timer } from 'rxjs/observable/timer';
import { map } from 'rxjs/operators/map';
import { ClubAcces, ClubAccesType } from '../state/club-access/club-access.state';

@Injectable()
export class DataService {
    constructor() {

    }

    getClubAccesses(): Observable<ClubAcces[]> {
        return timer(2000).pipe(
            map(() => [
                { id: 0, clubAccessType: ClubAccesType.OneClub, name: 'One club', price: 0 },
                { id: 1, clubAccessType: ClubAccesType.TwoClub, name: 'Two clubs', price: 50 },
                { id: 2, clubAccessType: ClubAccesType.City, name: 'City', price: 100 },
                { id: 3, clubAccessType: ClubAccesType.Country, name: 'Country', price: 150 },
                { id: 4, clubAccessType: ClubAccesType.Nordic, name: 'Nordic', price: 200 }
            ])
        )
    }
}