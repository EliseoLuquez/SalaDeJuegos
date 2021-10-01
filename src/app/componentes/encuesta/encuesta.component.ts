import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { EncuestaService } from 'src/app/service/encuesta.service';
import { LocalStorageService } from 'src/app/service/local-storage.service';
import { User } from 'src/app/shared/user';

@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  formulario!: FormGroup;
  usuario: User = new User();

  constructor(public fv: FormBuilder, public ls: LocalStorageService, public auth: AuthService, public encuestaSvc: EncuestaService, public router: Router) {
    this.usuario = JSON.parse(this.ls.get('usuarioLs'));
    this.formulario = fv.group({
      nombre:["", [Validators.required, this.validarNombre]],
      apellido:["", Validators.required],
      edad:["", [Validators.required, Validators.min(18), Validators.max(99)]],
      telefono:["", [Validators.required, Validators.maxLength(10), this.validarTelefono, this.validarTelefonoLenth]],
      pregUno:["", Validators.required],
      pregDos:["", Validators.required],
      pregTres:["", Validators.required]

    });
   }

  ngOnInit(): void {
  }

  enviar(){
    console.log(this.usuario);
    
    console.log(this.formulario);
    
    const nombre = this.formulario.controls['nombre'].value;
    const apellido = this.formulario.controls['apellido'].value;
    const edad = this.formulario.controls['edad'].value;
    const telefono = this.formulario.controls['telefono'].value;
    const pregUno = this.formulario.controls['pregUno'].value;
    const pregDos = this.formulario.controls['pregDos'].value;
    const pregTres = this.formulario.controls['pregTres'].value;
    
    this.encuestaSvc.addEncuesta(this.usuario.id, this.usuario.email, nombre, apellido, edad, telefono, pregUno, pregDos, pregTres);
    this.router.navigate(['home']);
  }

  validarNombre(control: AbstractControl){
    const nombre = control.value;
    const tieneEspacio = nombre.includes(' ');
    if(tieneEspacio){
      return { tieneEspacio: true };
    }
    return null;
  }

  validarTelefono(control: AbstractControl){
    const telefono = control.value;
    const telefonoNumerico = parseInt(telefono);
    if(!telefonoNumerico){
      return { telefonoNumerico: true };
    }
    return null;
  }

  validarTelefonoLenth(control: AbstractControl){
    const telefono = control.value;
    const telefonoLength = telefono.length;
    console.log(telefono.length);
    
    if(telefonoLength > 10){
      return { telefonoLength: true };
    }
    return null;
  }

}
