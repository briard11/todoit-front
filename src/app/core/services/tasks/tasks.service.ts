import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../../models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(
    private httpService: HttpClient
  ) { }

  getTasks(): Observable<Task[]> {
    return this.httpService.get<Task[]>(`${environment.apiUrl}/tareas`);
  }

  getTaskById(id: string): Observable<Task> {
    return this.httpService.get<Task>(`${environment.apiUrl}/tareas/${id}`)
  }

  createTask(task: Task): Observable<Task> {
    return this.httpService.post<Task>(`${environment.apiUrl}/tareas`, task);
  }

  updateTask(task: Task): Observable<Task> {
    return this.httpService.put<Task>(`${environment.apiUrl}/tareas/${task._id}`, task);
  }

  deleteTask(id: string): Observable<Task> {
    return this.httpService.delete<Task>(`${environment.apiUrl}/tareas/${id}`);
  }

}
