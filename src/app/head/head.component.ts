import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/services/auth.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit {

  constructor(private authSvc: AuthService,private router:Router){ }

  ngOnInit(): void {
  }

  logout(){
    this.authSvc.logout()
    .then(() => {
      this.router.navigate(['/login'])


    })
    .catch(error => {console.log(error)})
  }
}
