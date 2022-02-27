import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public user: SocialUser = new SocialUser();

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: SocialAuthService
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log('user ' + JSON.stringify(user));
    });
  }

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

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}
