import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoRoutingModule } from './ingreso-routing.module';
import { FormsModule } from '@angular/forms';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    IngresoRoutingModule,
    FormsModule
  ]
})
export class IngresoModule { }
