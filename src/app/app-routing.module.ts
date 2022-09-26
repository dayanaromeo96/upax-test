import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeadComponent } from './head/head.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    component: HeadComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])
    ),
    children: [
      { 
        path: 'employees', 
        loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule),
       },
       { 
        path: 'drag-drop', 
        loadChildren: () => import('./drag-drop/drag-drop.module').then(m => m.DragDropModule),
       },
      {path: '', redirectTo: '/employees', pathMatch: 'full' },
    ],
  },
  { 
    path: 'login', 
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
   },
   { path: '**', redirectTo: '/login'},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
