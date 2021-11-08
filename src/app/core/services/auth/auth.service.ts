import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: HttpClient,
    private cookieService: CookieService
  ) { }

  login(user: any): Observable<any> {
    return this.httpService.post<any>(`${environment.apiUrl}/auth/login`, user);
  }

  googleLogin(data) {
    // Revisar documentacion para mover correctamente el codigo html y quitarlo del public de back
    return this.httpService.post<any>(`${environment.apiUrl}/auth/google`, data)
  }

  logout() {
    this.cookieService.delete('hatoken');
  }

  loggedIn() {
    return this.cookieService.check('hatoken');
  }
}
