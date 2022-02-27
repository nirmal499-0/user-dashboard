import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-obser-sub-ex2',
  templateUrl: './obser-sub-ex2.component.html',
  styleUrls: ['./obser-sub-ex2.component.css'],
})
export class ObserSubEx2Component implements OnInit {
  count = 0;
  constructor(private userServiceService: UserServiceService) {}

  ngOnInit(): void {
    this.userServiceService.msg$.subscribe((e) => (this.count = e));
  }
  inc() {
    console.log('cc');
    this.count++;
    // this.userServiceService.sendMsg2(this.count);
    this.userServiceService.sendMsg2(this.count);
  }
}
