import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appName = 'Todoit'

  constructor(public authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
    this._snackBar.open('Logout successfully!', "close");
    this.router.navigateByUrl('/login');
  }

  isLoggedIn(): Boolean {
    return this.authService.loggedIn()
  }

}
