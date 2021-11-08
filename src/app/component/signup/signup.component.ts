import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { UsersService } from '../../core/services/users/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {

  userForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(2)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    rol: new FormControl('USER_ROLE', Validators.required)
  });
  error: Boolean = false;
  errorMsg: string = '';

  constructor(
    private router: Router,
    private userService: UsersService,
    private _snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {

  }

  signup() {
    if (this.userForm.valid) {
      const usuario: User = this.userForm.value;
      this.userService.createUser(usuario).subscribe(usuarioNew => {
        this._snackBar.open('Register successfully!', "close");
        this.router.navigateByUrl("/login");
      }, (err) => {
        this.error = true;
        this.errorMsg = err.error.errors[0].msg;
      })
    }
  }

}
