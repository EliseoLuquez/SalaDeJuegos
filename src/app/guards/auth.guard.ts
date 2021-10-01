import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { LocalStorageService } from '../service/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSvc: AuthService, private router: Router, private ls: LocalStorageService){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(this.authSvc.usuario.logueado);
      if(this.ls.get("usuarioLs")){
        return true;
      }
      // if(this.authSvc.usuario.logueado){
      //   return true;
      // }
      console.log('Acceso denegado!');
      this.router.navigate(['ingreso/login']); 
      
    return false;
  }
  
}
