import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObserSubEx2Component } from './obser-sub-ex2.component';

const routes: Routes = [
  {
    path: '',
    component: ObserSubEx2Component,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObserSubEx2RoutingModule {}
