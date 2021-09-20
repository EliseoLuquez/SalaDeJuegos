import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import * as firebase from 'firebase';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logueado: any = false;
  private usuarios:string = '/usuarios';
  public usuario: User = new User();
  UsuariosRef!: AngularFirestoreCollection<any>;
  usuarioData: any;
  userMail!: string;

  constructor(public afAuth: AngularFireAuth, private router: Router, private firestoreDb: AngularFirestore, private ls: LocalStorageService) {
    this.UsuariosRef = firestoreDb.collection(this.usuarios);
    afAuth.authState.subscribe(user => (this.logueado = user));
   }

   //login
   async onLogin(user: User)
   {
      // try{
         this.logueado = user;
          return await this.afAuth.signInWithEmailAndPassword(user.email, user.password)
          .then((result) =>{
            if(result.user?.uid){
              this.usuario.id = result.user.uid;
              
              let usuarioRef = this.firestoreDb.collection(this.usuarios, ref => ref.where(this.usuario.id, '==', 'uid'));
              console.log(usuarioRef);
            
              this.usuario.email = user.email;
              this.usuario.nombre = user.email;
              this.usuario.logueado = true;
              this.ls.set('UserMail', this.usuario.email);
            }
            
            this.router.navigate(['home']);
          });
   
        
      // }
      // catch(error){
      //   console.error('Error Login', error);
      // }
   }

   //register
   async onRegister(user: User){
    // try{
      return await this.afAuth.createUserWithEmailAndPassword(user.email, user.password)
      .then((result) =>{
        
        
        if(result.user)
        {
          this.usuario.email = user.email;
          this.usuario.nombre = user.email;
          this.usuario.logueado = true;
          this.usuario.fecha = new Date().toLocaleString();

          this.UsuariosRef.add(
            {email:user.email,
              fecha:new Date().toLocaleString(),
              id:result.user.uid});
        }
        this.router.navigateByUrl('login');
      })
      .catch((res)=>{
        this.usuario.logueado = false;
        //this.showErrorWithTimeout("No se pudo loguear", "Error", 3000)
        this.router.navigate(['error']);
      })

    // }
    // catch(error){
    //   console.error('Error Registro', error);
    // }
   }

   onLogout(){
    this.userMail = localStorage.getItem('UserMail') || "";
  if(this.usuario.email = this.userMail){
        this.afAuth.signOut();
        localStorage.removeItem("currentUser");
        this.router.navigate(['home']);
      }
   }

   checkIfUserIsLogged() {
    this.afAuth.onAuthStateChanged(usuario => {
      if (usuario) {
        this.usuarioData = usuario;
      }
      else {
        this.usuarioData = null;
      }
    })
    return this.usuarioData;
  }
}
