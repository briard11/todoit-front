import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './component/task/task.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { TasksRoutingModule } from './tasks-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from 'src/app/core/core.module';
import { MaterialModule } from 'src/app/material.module';
import { CreateTaskComponent } from "src/app/component/tasks/component/create-task/create-task.component";
import { EditTaskComponent } from './component/edit-task/edit-task.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TaskComponent,
    TasksComponent,
    CreateTaskComponent,
    EditTaskComponent
  ],
  imports: [
    TasksRoutingModule,
    CommonModule,
    RouterModule,
    SharedModule,
    CoreModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
