import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { JuegopropioComponent } from './juegopropio/juegopropio.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';
import { PreguntadosComponent } from './preguntados/preguntados.component';

const routes: Routes = [
  {path: 'mayormenor', component: MayormenorComponent,  canActivate: [AuthGuard]},
  {path: 'ahorcado', component: AhorcadoComponent,  canActivate: [AuthGuard]},
  {path: 'preguntados', component: PreguntadosComponent,  canActivate: [AuthGuard]},
  {path: 'juegoPropio', component: JuegopropioComponent,  canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
