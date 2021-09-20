import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = "";
  password: string = "";
  user: User = new User();

  constructor(public router:Router, public authSvc: AuthService) { }

  ngOnInit(): void {
  }

  async login(){
    this.user.email = this.email;
    this.user.password = this.password;
    this.authSvc.onLogin(this.user);
    
  } 

  async logEliseo(){
    // try {
      console.log(this.user);
      this.email = 'leliseo89@hotmail.com';
      this.password = '123456';
    //   await this.login();
    // } catch (error) {
      
    // }
  }

}

