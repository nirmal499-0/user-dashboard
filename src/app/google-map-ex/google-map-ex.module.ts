import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GoogleMapExComponent } from './google-map-ex.component';
import { GoogleMApExRoutingModule } from './google-map-ex-routing.module';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    GoogleMApExRoutingModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLyzhPk2tq6FW4OJd-aG-CDOjto4IObf0',
    }),
  ],
  declarations: [GoogleMapExComponent],
  exports: [GoogleMapExComponent],
})
export class GoogleMApExModule {}
