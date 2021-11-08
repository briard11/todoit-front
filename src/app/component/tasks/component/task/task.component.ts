import {
  Component, Input, OnInit
} from '@angular/core';
import { Task } from 'src/app/core/models/task.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TasksService } from '../../../../core/services/tasks/tasks.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input() task: Task;
  @Input() pending: Boolean;

  constructor(private tasksService: TasksService,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initializateForm()
  }

  initializateForm() {
  }

  archiveTask(state: Boolean) {
    this.task.estadoTarea = state;
    this.tasksService.updateTask(this.task).subscribe(taskUpdated => {
      this._snackBar.open(state ? 'Yeah! you complete your task!' : 'Unarchive your task, lets do it again!', "close");
    }, err => {
      this.task.estadoTarea = !state;
    })
  }

  deleteTask() {
    this.tasksService.deleteTask(this.task._id).subscribe(taskDeleted => {
      this._snackBar.open('You delete taks successfully', 'close')
    })
  }

  editTask() {
    this.router.navigateByUrl(`/tasks/task-edit/${this.task._id}`)
  }

}
