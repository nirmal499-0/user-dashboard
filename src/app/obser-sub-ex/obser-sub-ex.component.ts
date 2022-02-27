import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-obser-sub-ex',
  templateUrl: './obser-sub-ex.component.html',
  styleUrls: ['./obser-sub-ex.component.css'],
})
export class ObserSubExComponent implements OnInit {
  count = 0;
  constructor(private userServiceService: UserServiceService) {}

  ngOnInit(): void {
    // this.userServiceService.msg$2.subscribe((e) => (this.count = e));
    this.userServiceService.msg$.subscribe((e) => (this.count = e));
  }
  inc() {
    console.log('aa');
    this.count++;
    this.userServiceService.sendMsg(this.count);
  }
}
