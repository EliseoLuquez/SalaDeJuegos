import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email: string = "";
  password: string = "";
  error: any;
  user: User = new User();
  msjError!: string;

  constructor(public authSvc: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

  async onRegister()
  {
    try{
      this.user.email = this.email;
      this.user.password = this.password;
      await this.authSvc.onRegister(this.user);
      if(this.authSvc.msjError != "")
      {
        this.msjError = this.authSvc.msjError;
      }
    }
    catch(error){
      //this.error = error;
      console.log(error);
      
    }
    
  }

}

