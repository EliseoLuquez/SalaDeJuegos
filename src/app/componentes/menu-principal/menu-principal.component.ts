import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterModule, Router} from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  constructor(private router: Router, private authSvc: AuthService, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onLogout(){
    console.log('Logout');
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }

  irMayorMenor(){
    this.router.navigate(['juegos/mayormenor']);
  }

}
