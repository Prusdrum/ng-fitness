// ./effects/auth.effects.ts
import { Injectable } from '@angular/core';
import { DataService } from '../../services/data.service';
import { SetupActionTypes, SetupLoaded } from '../setup/setup.actions';
import { SetClubAccesses } from '../club-access/club-access.actions';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, mergeMap, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class LoadEffects {
    @Effect() loadData$ = this.actions$.pipe(
        ofType(SetupActionTypes.LOAD_SETUP),
        mergeMap(() => (
            this.dataService.getClubAccesses().pipe(
                mergeMap(clubAccesses => [
                    new SetClubAccesses(clubAccesses),
                    new SetupLoaded()
                ]),
                tap(console.log)
            )
        ))
    );


    constructor(
        private dataService: DataService,
        private actions$: Actions
    ) { }
}