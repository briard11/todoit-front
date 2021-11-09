import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasksList: Task[] = [];

  constructor(
    private tasksService: TasksService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    this.tasksService.getTasks().subscribe(tasks => {
      this.tasksList = tasks
    });
  }

  getTasksPending() {
    return this.tasksList.filter(x => !x.estadoTarea && x.estado)
  }
  getTasksCompleted() {
    return this.tasksList.filter(x => !!x.estadoTarea && x.estado)
  }

  createTask() {
    this.router.navigateByUrl('/tasks/task-create')
  }

}
