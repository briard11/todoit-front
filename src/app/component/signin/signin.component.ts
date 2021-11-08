import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/core/models/user.model';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  userForm = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });
  error: Boolean = false;
  url = window.location.hostname.includes("localhost")
    ? "http://localhost:8080/api/auth/google"
    : "https://todoit-back.herokuapp.com/api/auth/google";


  constructor(
    private authService: AuthService,
    private cookieService: CookieService,
    private router: Router,
    private socialAuthService: SocialAuthService
  ) {
  }

  ngOnInit(): void {

  }

  login() {
    if (this.userForm.valid) {
      const usuario = this.userForm.value;
      this.authService.login(usuario).subscribe(({ token }) => {
        this.cookieService.set('hatoken', token);
        this.router.navigateByUrl('/tasks');
      }, (err) => this.error = true);
    }
  }

  loginGoogle() {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      this.authService.googleLogin({ id_token: data.idToken }).subscribe(({ token }) => {
        this.cookieService.set('hatoken', token);
        this.router.navigateByUrl('/tasks');
      })
    })
  }

  signOut() {
    this.socialAuthService.signOut()
  }

}
