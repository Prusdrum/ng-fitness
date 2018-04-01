import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { ClubAccessBlock, getClubAccesses } from '../state/selectors/club-accesses';
import { SelectedClubAccess } from '../state/club-access/club-access.actions';

@Component({
  selector: 'app-club-access',
  templateUrl: './club-access.component.html',
  styleUrls: ['./club-access.component.css']
})
export class ClubAccessComponent implements OnInit {
  clubAccesses: ClubAccessBlock[];

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.connect();
  }

  connect(): void {
    this.store.select(getClubAccesses).subscribe(clubAccesses => {
      this.clubAccesses = [].concat(clubAccesses);
    });
  }

  onSelect(clubAccess: ClubAccessBlock) {
    this.store.dispatch(new SelectedClubAccess(clubAccess.id));
  }
}
