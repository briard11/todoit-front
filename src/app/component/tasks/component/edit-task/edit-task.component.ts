import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/core/models/task.model';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  idTask: string = '';
  task: Task;
  taskForm: FormGroup;

  constructor(
    private activatedRoute: ActivatedRoute,
    private tasksService: TasksService,
    private _snackBar: MatSnackBar,
    private router: Router) {
    this.idTask = this.activatedRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {
    this.getTask();
  }

  initForm() {
    let taskFormControls = {}
    Object.getOwnPropertyNames(this.task).forEach(prop => {
      taskFormControls[prop] = new FormControl(this.task[prop]);
    })
    this.taskForm = new FormGroup(taskFormControls);
  }

  getTask() {
    this.tasksService.getTaskById(this.idTask).subscribe(task => {
      this.task = task;
      this.initForm();
    }, err => {
      this.router.navigateByUrl('/tasks');
    })
  }

  editTask() {
    if (this.taskForm.valid) {
      const taskUpdate= this.taskForm.value;
      this.tasksService.updateTask(taskUpdate).subscribe(taskUpdated => {
        this._snackBar.open('You update taks successfully', 'close')
        this.router.navigateByUrl('/tasks')
      })
    }
  }

}
