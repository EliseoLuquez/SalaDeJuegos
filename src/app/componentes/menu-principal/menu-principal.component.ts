import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  //usuario!: User;
  logueado: boolean = false;
  email!: string;

  constructor(public router: Router, public authSvc: AuthService, private ls: LocalStorageService) { }

  ngOnInit(): void {
    this.authSvc.afAuth.authState.subscribe(res=>{
      if(res && res.uid){
        console.log(res.email);;
        this.logueado = true;
        this.ls.set("UserMail", res.email);
        this.email = res.email || "";
      }
    });
  }

  logout(){
    this.authSvc.onLogout();
    this.ls.remove("UserMail");
    this.logueado = false;
  }
  goPreguntados(){
    this.router.navigate(['juegos/preguntados']);
  }
  goMayorMenor(){
    this.router.navigate(['juegos/mayormenor']);
  }
  goAhorcado(){
    this.router.navigate(['juegos/ahorcado']);
  }
  goChat(){
    this.router.navigate(['chat']);
  }
  goQuienSoy(){
    this.router.navigate(['quienSoy']);
  }
  goHome(){
    this.router.navigate(['home']);
  }
  goJuegoPropio(){
    this.router.navigate(['juegos/juegoPropio']);
  }

}
