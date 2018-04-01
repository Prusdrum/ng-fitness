import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { ClubAccessComponent } from './club-access/club-access.component';
import { PriceInfoComponent } from './price-info/price-info.component';
import { SummaryComponent } from './summary/summary.component';

import { createRootReducer } from './state/app.state';
import { DataService } from './services/data.service';
import { VisualsModule } from './visuals/visuals.module';

import { LoadEffects } from './state/effects/load.effects';

@NgModule({
  declarations: [
    AppComponent,
    ClubAccessComponent,
    PriceInfoComponent,
    SummaryComponent
  ],
  imports: [
    VisualsModule,
    BrowserModule,
    StoreModule.forRoot(createRootReducer()),
    StoreDevtoolsModule.instrument({
      maxAge: 10
    }),
    EffectsModule.forRoot([ LoadEffects ])
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
