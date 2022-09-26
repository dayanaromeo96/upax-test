import { Component, EventEmitter, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../interfaces/employee.interface';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  submited: boolean = false;
  initialDate = new Date();
  public event: EventEmitter<any> = new EventEmitter();
  
  constructor(public modalRef: BsModalRef,private formBuilder: FormBuilder,
    private datePipe: DatePipe, private employeeSvc: EmployeesService,) { 
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(30)]],
      last_name: ['', [Validators.required, Validators.maxLength(30)]],
      birthday: [this.initialDate, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  createEmployee(){
    this.submited = true;
    if (!this.employeeForm.invalid) {
      const data = this.employeeForm.value;
      let auxEmploy:Employee = {
        name: data.name,
        last_name:data.last_name,
        birthday: this.datePipe.transform( data.birthday, 'yyyy-MM-dd')!,
      };
      this.employeeSvc.createEmployees(auxEmploy).subscribe((data) => {
       if(data.success){
          this.triggerEvent(auxEmploy);
           this.modalRef.hide();
       }
       else{
        window.alert("Ha ocurrido un error, por favor inténtelo más tarde");
       }
      })
    }
  }

  triggerEvent(auxEmploy:any) {
    this.event.emit({auxEmploy });
  }
 

}
