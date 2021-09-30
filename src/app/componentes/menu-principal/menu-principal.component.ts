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
  usuario: User = new User();

  constructor(public router: Router, public authSvc: AuthService, private ls: LocalStorageService) {
    
   }

  ngOnInit(): void {
    this.usuario = JSON.parse(this.ls.get('usuarioLs'));
    if(this.usuario){
      this.logueado = true;
      this.usuario.logueado = true;
      console.log(this.logueado);
    }
  }

  logout(){
    this.authSvc.onLogout();
    this.ls.remove("usuarioLs");
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
  goEncuesta(){
    this.router.navigate(['encuesta']);
  }

}
