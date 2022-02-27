import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map-ex',
  templateUrl: './google-map-ex.component.html',
  styleUrls: ['./google-map-ex.component.css'],
})
export class GoogleMapExComponent implements OnInit {
  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;

  constructor() {}

  ngOnInit(): void {}

  onChoseLocation(event: any) {
    console.log('c: ' + event);
  }
}
