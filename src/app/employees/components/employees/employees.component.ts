import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../../services/employees.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  data: any;
  paginateArray: any;
  filterpost = '';
  bsModalRef: BsModalRef | undefined;
  constructor(private employeeSvc: EmployeesService, private modalService: BsModalService) {
    
   }

  ngOnInit(): void {
    this.employeeSvc.getListEmployees().subscribe((data) => {
      this.data=data.data.employees;
      this.paginateArray = this.data.slice(0, 10);
    })

  }

  onLogout():void{}

  pageChanged(event: PageChangedEvent): void {
    const startItem = (event.page - 1) * event.itemsPerPage;
    const endItem = event.page * event.itemsPerPage;
    this.paginateArray = this.data.slice(startItem, endItem);
  }

  openModalCreateEmployee() {
    this.bsModalRef=this.modalService.show(
      CreateEmployeeComponent,
      Object.assign({}, { class: 'gray modal-md' })
    );
      this.bsModalRef.content.closeBtnName = 'Close'; 
      this.bsModalRef.content.event.subscribe((res: any) => {
        this.data.push(res.auxEmploy);
      });

   
  }

}
