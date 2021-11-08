import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user.model';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpService: HttpClient
  ) { }

  getUsers(): Observable<User[]> {
    return this.httpService.get<User[]>(`${environment.apiUrl}/usuarios`);
  }

  getUserById(id: string): Observable<User> {
    return this.httpService.get<User>(`${environment.apiUrl}/usuarios/${id}`)
  }

  createUser(user: User): Observable<User> {
    return this.httpService.post<User>(`${environment.apiUrl}/usuarios`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpService.put<User>(`${environment.apiUrl}/usuarios/${user._id}`, user);
  }

  deleteUser(id: string): Observable<User> {
    return this.httpService.delete<User>(`${environment.apiUrl}/usuarios/${id}`);
  }
}
