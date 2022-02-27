import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent, ViewEditDialog } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ObserSubExComponent } from '../obser-sub-ex/obser-sub-ex.component';
import { ObserSubEx2Component } from '../obser-sub-ex2/obser-sub-ex2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [
    DashboardComponent,
    ViewEditDialog,
    ObserSubExComponent,
    ObserSubEx2Component,
  ],
  entryComponents: [ViewEditDialog],
  exports: [DashboardComponent],
})
export class DashboardModule {}
