import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ObserSubExComponent } from './obser-sub-ex.component';
import { ObserSubExRoutingModule } from './obser-sub-ex-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ObserSubExRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [ObserSubExComponent],
  entryComponents: [],
  exports: [ObserSubExComponent],
})
export class ObserSubExModule {}
