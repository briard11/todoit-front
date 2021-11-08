import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/models/task.model';
import { TasksService } from 'src/app/core/services/tasks/tasks.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  idTask: string = '';
  task: Task = {
    _id: '',
    titulo: '',
    descripcion: '',
    estado: true,
    estadoTarea: false,
    correo: ''
  };
  taskForm: FormGroup;

  constructor(
    private tasksService: TasksService,
    private _snackBar: MatSnackBar,
    private router: Router) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    let taskFormControls = {}
    Object.getOwnPropertyNames(this.task).forEach(prop => {
      if (prop !== '_id' && prop !== '__v')
        taskFormControls[prop] = new FormControl('');
    })
    this.taskForm = new FormGroup(taskFormControls);
  }

  createTask() {
    if (this.taskForm.valid) {
      const taskNew = this.taskForm.value;
      this.tasksService.createTask(taskNew).subscribe(taskCreated => {
        this._snackBar.open('You create taks successfully', 'close')
        this.router.navigateByUrl('/tasks')
      })
    }
  }
}
