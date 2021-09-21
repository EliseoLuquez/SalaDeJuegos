import { Component, OnInit } from '@angular/core';
import { AngularFireList } from '@angular/fire/database';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ChatService } from 'src/app/service/chat.service';
import { ChatMensaje } from 'src/app/shared/chat-mensaje';
import { map } from 'rxjs/operators';
import { LocalStorageService } from 'src/app/service/local-storage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  userMail!: string;
  msjUsuario!: any;
  mensajes!: AngularFireList<ChatMensaje>;
  msjs: any;
  lsUsuarioEmail!: any;
  usuarioActual: boolean = false;

  constructor(public afAuth: AuthService, private chatSvc: ChatService, public router: Router, ls: LocalStorageService) {
    // let usuarioEmailLS = ls.get('UserMail');
    // this.lsUsuarioEmail = usuarioEmailLS?.toString();
    this.lsUsuarioEmail = ls.get('UserMail');
   }

  ngOnInit(): void {
    this.getMensajes();
    this.userMail = this.afAuth.usuario.email.toString();
    if(this.lsUsuarioEmail.includes(this.userMail)){
      this.usuarioActual = true;
    }
    console.log(this.lsUsuarioEmail);
    console.log(this.userMail);
    
  }

  getMensajes() {
    this.chatSvc.getMensajesList().snapshotChanges().pipe(
      map((changes: any[]) =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(mensajes => {
      this.msjs = mensajes;
    });
  }

  enviarMensaje(){
    let msj = new ChatMensaje();
    msj.mensaje = this.msjUsuario;
    msj.fecha = new Date().toLocaleString();
    msj.email = this.afAuth.usuario.email;
    this.chatSvc.addMensaje(msj);
    this.msjUsuario = "";
  }


}
