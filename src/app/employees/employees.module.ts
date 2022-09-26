import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { SearchPipe } from './pipes/search.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


const routes: Routes = [
  {
    path: '',
    component: EmployeesComponent
  },
];

@NgModule({
  declarations: [EmployeesComponent, SearchPipe, CreateEmployeeComponent],
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule,
    ModalModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class EmployeesModule { }
