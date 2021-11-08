import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { UserGuardGuard } from './core/guards/user-guard.guard';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/tasks',
        pathMatch: 'full',
      },
      {
        path: 'tasks',
        loadChildren: () => import('./component/tasks/tasks.module').then(m => m.TasksModule),
        canActivate: [UserGuardGuard]
      },
      {
        path: 'login',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
