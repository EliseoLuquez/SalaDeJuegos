import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JuegosRoutingModule } from './juegos-routing.module';
import { FormsModule } from '@angular/forms';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';
import { JuegopropioComponent } from './juegopropio/juegopropio.component';


@NgModule({
  declarations: [
    MayormenorComponent,
    AhorcadoComponent,
    PreguntadosComponent,
    JuegopropioComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule,
    FormsModule
  ]
})
export class JuegosModule { }
