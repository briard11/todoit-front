import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './component/tasks/tasks.component';
import { CreateTaskComponent } from './component/create-task/create-task.component';
import { EditTaskComponent } from './component/edit-task/edit-task.component';

const routes: Routes = [
    {
        path: '',
        component: TasksComponent
    },
    {
        path: 'task-edit/:id',
        component: EditTaskComponent
    },
    {
        path: 'task-create',
        component: CreateTaskComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TasksRoutingModule { }


