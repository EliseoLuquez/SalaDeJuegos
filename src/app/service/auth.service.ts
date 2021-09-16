import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { User } from '../shared/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
public isLogged: any = false;

  constructor(public afAuth: AngularFireAuth) {
    afAuth.authState.subscribe(user => (this.isLogged = user));
   }

   //login
   async onLogin(user: User)
   {
      // try{
          return await this.afAuth.signInWithEmailAndPassword(user.email, user.password);
   
        
      // }
      // catch(error){
      //   console.error('Error Login', error);
      // }
   }

   //register
   async onRegister(user: User){
    // try{
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password);
    // }
    // catch(error){
    //   console.error('Error Registro', error);
    // }
   }
}
