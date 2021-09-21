import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { AuthGuard } from './guards/auth.guard';
import { JuegosModule } from './juegos/juegos.module';
import { IngresoModule } from './ingreso/ingreso.module';
import { ChatComponent } from './componentes/chat/chat.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'ingreso', loadChildren: () => import('./ingreso/ingreso.module').then(m => IngresoModule)},
  {path:'quienSoy', component:QuienSoyComponent, canActivate: [AuthGuard]},
  {path:'chat', component:ChatComponent, canActivate: [AuthGuard]},
  //{path:'**', component:ErrorComponent},
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => JuegosModule), canActivate: [AuthGuard]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
