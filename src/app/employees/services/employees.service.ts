import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../interfaces/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  getListEmployees(): Observable<any> {
    return this.http.get<Employee>(`${environment.baseUrl}`);
  }

  createEmployees(employees: Employee): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}`,employees);
  }
}
