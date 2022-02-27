import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapExComponent } from './google-map-ex.component';

const routes: Routes = [
  {
    path: '',
    component: GoogleMapExComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GoogleMApExRoutingModule {}
