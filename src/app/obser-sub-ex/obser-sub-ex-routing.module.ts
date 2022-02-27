import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObserSubExComponent } from './obser-sub-ex.component';

const routes: Routes = [
  {
    path: '',
    component: ObserSubExComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObserSubExRoutingModule {}
