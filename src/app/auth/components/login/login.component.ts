import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSrv:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

 accedi(form:NgForm){
   this.authSrv.login(form.value)
   this.router.navigate(['/utenti'])
 }



}
