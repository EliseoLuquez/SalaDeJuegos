import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ErrorComponent } from './componentes/error/error.component';
import { MenuPrincipalComponent } from './componentes/menu-principal/menu-principal.component';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { isMetaProperty } from 'typescript';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FormsModule } from '@angular/forms';
import { LetraComponent } from './componentes/letra/letra.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    QuienSoyComponent,
    RegistroComponent,
    ErrorComponent,
    MenuPrincipalComponent,
    LetraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
