
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSvc: AuthService, private router: Router, private afAuth: AngularFireAuth) { }

  ngOnInit(): void {
  }

  onLogout(){
    console.log('Logout!');
    this.afAuth.signOut();
    this.router.navigate(['login']);
    
  }
}
