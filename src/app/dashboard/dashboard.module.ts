import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DashboardComponent, ViewEditDialog } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    DashboardRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [DashboardComponent, ViewEditDialog],
  entryComponents: [ViewEditDialog],
  exports: [DashboardComponent],
})
export class DashboardModule {}
