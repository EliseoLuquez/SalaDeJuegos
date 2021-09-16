import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { User } from '../../shared/user';


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

  constructor(private authSvc: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  async onRegister()
  {
    try{
      this.user.email = this.email;
      this.user.password = this.password;
      const user = await this.authSvc.onRegister(this.user);
      if(user){
        console.log('registro exitoso');
        this.router.navigate(['home']);
      }
    }
    catch(error){
      this.error = error;
      console.log(error);
      
    }
    
  }

}
