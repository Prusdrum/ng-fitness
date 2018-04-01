import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoaderComponent,
    ContainerComponent
  ],
  exports: [
    LoaderComponent,
    ContainerComponent
  ]
})
export class VisualsModule { }
