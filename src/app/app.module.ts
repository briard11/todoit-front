import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './component/signup/signup.component';
import { SigninComponent } from './component/signin/signin.component';
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { CookieService } from 'ngx-cookie-service';
import { RouterModule } from '@angular/router';
import { TasksModule } from './component/tasks/tasks.module';
import { LayoutComponent } from './component/layout/layout.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersComponent } from './component/users/users.component';
import { GoogleLoginProvider, SocialAuthServiceConfig, SocialLoginModule } from 'angularx-social-login';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    LayoutComponent,
    PageNotFoundComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    SharedModule,
    RouterModule,
    TasksModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    SocialLoginModule
  ],
  providers: [CookieService,
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              environment.clientId
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
