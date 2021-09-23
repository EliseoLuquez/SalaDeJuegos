
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

  usuario!: any;
  logueado: boolean = false;
  mensaje!: string;
  constructor(public authSvc: AuthService, public router: Router, private ls: LocalStorageService) { }

  ngOnInit(): void {
  //   console.log(this.authSvc.usuario.logueado);
     this.usuario = this.authSvc.logueado;
     console.log(this.usuario);
  //     if(this.usuario.email == this.ls.get('UserMail')){
  //       this.logueado = true;
  //   }
  }

  goPreguntados(){
    if(this.usuario){
      this.router.navigate(['juegos/preguntados']);
    }
    else{
      this.mensaje = "Debes Loguearte!!";
      console.log(this.mensaje);
      
    }
  }
  goMayorMenor(){
    if(this.usuario){
    this.router.navigate(['juegos/mayormenor']);
  }
  else{
    this.mensaje = "Debes Loguearte!!";
    console.log(this.mensaje);
    
  }
  }
  goAhorcado(){
    if(this.usuario){
    this.router.navigate(['juegos/ahorcado']);
  }
  else{
    this.mensaje = "Debes Loguearte!!";
    console.log(this.mensaje);
    
  }
  }
  goChat(){
    if(this.usuario){
    this.router.navigate(['chat']);
  }
  else{
    this.mensaje = "Debes Loguearte!!";
    console.log(this.mensaje);
    
  }
  }
  goQuienSoy(){
    if(this.usuario){
    this.router.navigate(['quienSoy']);
  }
  else{
    this.mensaje = "Debes Loguearte!!";
    console.log(this.mensaje);
    
  }
  }
  goJuegoPropio(){
    if(this.usuario){
    this.router.navigate(['juegos/juegoPropio']);
  }
  else{
    this.mensaje = "Debes Loguearte!!";
    console.log(this.mensaje);
    
  }
  }
}
