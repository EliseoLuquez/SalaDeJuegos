import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/user';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  user: User = new User();

  constructor(private router:Router, private authSvc: AuthService) { }


  ngOnInit(): void {
  }

  async onLogin(){
    try {
      console.log(this.user);
      this.user.email = this.email;
      this.user.password = this.password;
      const user = await this.authSvc.onLogin(this.user);
      if(user){
        console.log('login exitoso');
        this.router.navigateByUrl('home');
      }
    } catch (error) {
      
    }
  }

  async logEliseo(){
    try {
      console.log(this.user);
      this.email = 'leliseo89@hotmail.com';
      this.password = '123456';
      this.user.email = 'leliseo89@hotmail.com';
      this.user.password = '123456';
      const user = await this.authSvc.onLogin(this.user);
      if(user){
        console.log('login exitoso');
        this.router.navigateByUrl('home');
      }
    } catch (error) {
      
    }
  }
}
