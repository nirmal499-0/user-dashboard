import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ObserSubEx2Component } from './obser-sub-ex2.component';
import { ObserSubEx2RoutingModule } from './obser-sub-ex2-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ObserSubEx2RoutingModule,
    FlexLayoutModule,
  ],
  declarations: [ObserSubEx2Component],
  entryComponents: [],
  exports: [ObserSubEx2Component],
})
export class ObserSubExModule {}
