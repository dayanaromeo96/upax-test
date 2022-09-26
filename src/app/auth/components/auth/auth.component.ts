import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private authSvc : AuthService, private router: Router,private formBuilder: FormBuilder) {
    this.loginForm=this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required]
    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    this.authSvc.login(this.loginForm.value)
    .then(response=>{
        this.router.navigate(['/employees']);
    })
    .catch(error=>{console.log(error);
      window.alert("Ha ocurrido un error por favor inténtelo más tarde");})
  }


}
