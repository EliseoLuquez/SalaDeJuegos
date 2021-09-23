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

  //personajeImg: any;
  personaje!: any;
  rtaCorrecta: boolean = false;
  mensaje!: string;
  arrayPersonajes: any = [];
  empezar: boolean = false;
  img: any;
  constructor(private apiSvc: ApiSimpsonService,public router: Router, public authService: AuthService) {

   }

  ngOnInit(): void {
  }

  async traerPersonaje(){
    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      console.log(personaje[0]);
      this.personaje = personaje[0];
      this.img = personaje[0].image;
      this.arrayPersonajes.push(personaje[0]);
    },
    error => {
      console.log(error)}
    );
    this.cargarPersonajes();
  }


  cargarPersonajes(){
    this.arrayPersonajes = [];

    let repetido1 = false;
    let repetido2 = false;
    let repetido3 = false;

    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      console.log(personaje[0]);
      for (let index = 0; index < this.arrayPersonajes.length; index++) {
        if(personaje[0].character != this.arrayPersonajes[index].character){
          this.arrayPersonajes.push(personaje[0]);
        }
        repetido1 = true;
      }
    },
    error => {
      console.log(error)}
    );

    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      console.log(personaje[0]);
      for (let index = 0; index < this.arrayPersonajes.length; index++) {
        if(personaje[0].character != this.arrayPersonajes[index].character){
          this.arrayPersonajes.push(personaje[0]);
        }
      }
    },
    error => {
      console.log(error)}
    );

    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      console.log(personaje[0]);
      for (let index = 0; index < this.arrayPersonajes.length; index++) {
        if(personaje[0].character != this.arrayPersonajes[index].character){
          this.arrayPersonajes.push(personaje[0]);
        }
      }
    },
    error => {
      console.log(error)}
    );

    //this.validarRepetido(this.personaje.character);
    this.desordenarRespuestas();
  }

  validarRepetido(personajeNombre: string){ 
    let eliminado = false;
    console.log(this.arrayPersonajes);
    for (let index = 0; index < this.arrayPersonajes.length; index++) {
      if(personajeNombre == this.arrayPersonajes[index].character){
        console.log(this.arrayPersonajes[index]);
        this.arrayPersonajes.splice(this.arrayPersonajes[index], 1);
        console.log("personaje eliminado repetido");
        
        eliminado = true;
        console.log(eliminado);
      } 
    }
    //console.log(eliminado);
    if(!eliminado){
      console.log("lista con personaje repetido eliminado");
      console.log(this.arrayPersonajes);
      this.arrayPersonajes.splice(this.arrayPersonajes[0], 1);
    }
    //console.log(this.arrayPersonajes);
    this.arrayPersonajes.push(this.personaje)
    console.log("lista de personajes validada");
    console.log(this.arrayPersonajes);
    
  }

  desordenarRespuestas()
  {
    this.arrayPersonajes.sort(function (){return Math.random() - 0.5} );
  }

  correcto(nombre:string){
    console.log(this.personaje.character);
    
    if(nombre == this.personaje.character){
      this.rtaCorrecta = true;
      this.mensaje = "Correcto!";
      console.log(this.mensaje);
    }

    this.traerPersonaje();
  }

  async onEmpezar(){
    this.empezar = true;
    this.traerPersonaje();
    this.validarRepetido(this.personaje.character);
  }
}
