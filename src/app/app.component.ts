import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './state/app.state';
import { LoadSetup } from './state/setup/setup.actions';
import { isLoading } from './state/setup/setup.selectors';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loading: boolean;

  constructor(private store: Store<AppState>) {

  } 

  ngOnInit() {
    this.store.dispatch(new LoadSetup());
    this.store.select(isLoading).subscribe((isLoading) => {
      this.loading = isLoading;
    });
  }
}
