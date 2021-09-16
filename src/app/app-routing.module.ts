import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './componentes/error/error.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { QuienSoyComponent } from './componentes/quien-soy/quien-soy.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { AuthGuard } from './guards/auth.guard';
import { JuegosModule } from './juegos/juegos.module';

const routes: Routes = [
  {path:'home', component:HomeComponent, canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path:'registro', component:RegistroComponent},
  {path:'quienSoy', component:QuienSoyComponent},
  {path:'chat', component:QuienSoyComponent, canActivate: [AuthGuard]},
  //{path:'**', component:ErrorComponent},
  {path:'', redirectTo:'login', pathMatch: 'full'},
  {path: 'juegos', loadChildren: () => import('./juegos/juegos.module').then(m => JuegosModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
