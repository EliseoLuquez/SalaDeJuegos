import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { User } from '../shared/user';
import * as firebase from 'firebase';
import { LocalStorageService } from './local-storage.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public logueado: any = false;
  private dbPath:string = '/usuarios';
  public usuario: User = new User();
  usuariosRef!: AngularFirestoreCollection<any>;
  usuarioData: any;
  userMail!: string;
  usuarios!: Observable<any[]>;
  msjError: string = "";

  constructor(public afAuth: AngularFireAuth, private router: Router, private firestoreDb: AngularFirestore, private ls: LocalStorageService) {
    this.usuariosRef = firestoreDb.collection<any>(this.dbPath);
    this.getUsuarios();
    console.log(this.usuarios);
    //afAuth.authState.subscribe(user => (this.usuario = user));
   }

   //login
   async onLogin(user: User)
   {
         this.logueado = user;
          return await this.afAuth.signInWithEmailAndPassword(user.email, user.password)
          .then((result) =>{
            if(result.user?.uid){
              this.usuario.id = result.user.uid;
              console.log(this.usuario.id);
              
              let usuarioRef = this.firestoreDb.collection(this.dbPath, ref => ref.where(this.usuario.id, '==', 'id'));
              console.log(usuarioRef);
              
              this.usuario.email = user.email;
              this.usuario.nombre = user.email;
              this.usuario.logueado = true;

              this.ls.set('usuarioLs', JSON.stringify(this.usuario));
            }
            this.msjError = "";
            this.router.navigate(['home']);
          })
          .catch((res)=>{
            this.usuario.logueado = false;
            //this.showErrorWithTimeout("No se pudo loguear", "Error", 3000)
            if(res.message == "The password is invalid or the user does not have a password."){
              this.msjError = "La contraseña ingresada es invalida."
            }
         
          })
        
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

          this.usuariosRef.add(
            { email: user.email,
              fecha: new Date().toLocaleString(),
              id: result.user.uid });
        }
        this.msjError = "";
        this.router.navigateByUrl('home');
      })
      .catch((res)=>{
        this.usuario.logueado = false;
        //this.showErrorWithTimeout("No se pudo loguear", "Error", 3000)
        if(res.message == "The email address is already in use by another account."){
          this.msjError = "El email ingresado ya esta en uso."
        }
        if(res.message == "The email address is badly formatted."){
          this.msjError = "El formato del email no es correcto."
        }
        // console.log(res);
        // this.msjError = res.message;        
        //this.router.navigate(['error']);
      })
   }

   onLogout(){
    this.userMail = localStorage.getItem('usuarioLs') || "";
    if(this.usuario.email = this.userMail){
          this.afAuth.signOut();
          localStorage.removeItem("usuarioLs");
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

  getUsuarios(){
    this.usuarios = this.usuariosRef.snapshotChanges().pipe(
      map(actions => actions.map(a => a.payload.doc.data() as any))
    )
  }

  obtenerUsuarioPorEmail(email:string){
    return this.usuariosRef.ref.get().then((doc)=>{
      if(!doc.empty){
        // console.log(doc.docs[0].data());
      }
    });
  }
}
