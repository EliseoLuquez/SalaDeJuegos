
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario!: User;
  logueado: boolean = false;

  constructor(public authSvc: AuthService, public router: Router, private ls: LocalStorageService) { }

  ngOnInit(): void {
  //   console.log(this.authSvc.usuario.logueado);
  //   this.usuario = this.authSvc.checkIfUserIsLogged()
  //   console.log(this.usuario.email);
  //     if(this.usuario.email == this.ls.get('UserMail')){
  //       this.logueado = true;
  //   }
  }
}
