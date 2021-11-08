import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth/auth.service';
import { TasksService } from './services/tasks/tasks.service';
import { UsersService } from './services/users/users.service';
import { UserGuardGuard } from './guards/user-guard.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorInterceptor } from './interceptors/jwt-interceptor.interceptor';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    TasksService,
    UsersService,
    UserGuardGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorInterceptor,
      multi: true
    }
  ]
})
export class CoreModule { }
