import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  formUser : FormGroup;

  constructor(private authSvc : AuthService,
     private router: Router,) { 
    this.formUser=new FormGroup({
      email: new FormControl(),
      password: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    if (!this.formUser.invalid) {
    this.authSvc.register(this.formUser.value)
    .then(response=>{
        window.alert("El usuario se ha registrado correctamente");
        this.router.navigate(['/login']);
    })
    .catch(
      error=>{console.log(error);
      window.alert("Ha ocurrido un error, por favor inténtelo más tarde");
    })
  }else{
    window.alert("Por favor, inserte correctamente email y password");
  }
  }

}
