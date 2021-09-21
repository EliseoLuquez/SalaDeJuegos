import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiSimpsonService } from 'src/app/service/api-simpson.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-preguntados',
  templateUrl: './preguntados.component.html',
  styleUrls: ['./preguntados.component.css']
})
export class PreguntadosComponent implements OnInit {

  personajeImg: any;
  personajeNombre!: string;
  rtaCorrecta: boolean = false;
  mensaje!: string;

  constructor(private apiSvc: ApiSimpsonService,public router: Router, public authService: AuthService) {
    this.traerPersonaje();
   }

  ngOnInit(): void {
  }

  traerPersonaje(){
    this.apiSvc.obtenerPersonajes().subscribe((personaje:any) =>{
      console.log(personaje);   
      this.personajeImg = personaje[0].image;
      this.personajeNombre = personaje[0].character;
      document.querySelector("#personajeImg")?.setAttribute("src", this.personajeImg);
    },
    error => {console.log(error)}
    );
  }

  correcto(){
    this.rtaCorrecta = true;
    this.mensaje = "Correcto!";
    console.log(this.mensaje);
    this.traerPersonaje();
    
  }
}
