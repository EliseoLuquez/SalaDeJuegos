import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayormenorComponent } from './mayormenor/mayormenor.component';

const routes: Routes = [
  {path: 'mayormenor', component: MayormenorComponent},
  {path: 'ahorcado', component: AhorcadoComponent},
  {path:'', redirectTo:'mayormenor', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JuegosRoutingModule { }
