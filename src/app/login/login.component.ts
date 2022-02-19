import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private _snackBar: MatSnackBar) {}

  ngOnInit(): void {}

  login(userId: any) {
    console.log(userId);
    if (userId > 0 && userId < 11) {
      sessionStorage.setItem('userId', userId);
      this.router.navigate(['dashboard']);
    } else {
      console.log('No such user');
      this._snackBar.open('No such user', 'Ok', {
        duration: 3000,
      });
    }
  }
}
