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
    // this.traerPersonaje();
    // this.traerPersonajes("4");
    //this.validarRepetido(this.personaje.character);
    //this.desordenarRespuestas();
    this.tratarPersonajes();
    
  }

  tratarPersonajes(){
    //console.log(this.traerPersonaje());
    this.traerPersonaje();
  }

  traerPersonaje(){
    this.apiSvc.obtenerPersonaje().subscribe((personaje:any) =>{
      this.personaje = personaje[0];
      //document.querySelector("#personajeImg")?.setAttribute("src", this.personaje.image);
      this.img = this.personaje.image;
      //console.log(this.personaje);   
      this.traerPersonajes("4");
      //this.validarRepetido(this.personaje.character);
    },
    error => {
      console.log(error)}
    );
  }

  traerPersonajes(num: string){
    this.apiSvc.obtenerPersonajes(num).subscribe((personajes:any) =>{
      //this.arrayPersonajes.push(personajes);
      this.arrayPersonajes = personajes;
      console.log(this.arrayPersonajes);
    },
    error => {console.log(error)}
    );
    //this.validarRepetido(this.personaje.character);
    //this.desordenarRespuestas();

  }

  validarRepetido(personajeNombre: string){ 
    let eliminado = false;
    console.log(this.arrayPersonajes);
    for (let index = 0; index < this.arrayPersonajes.length; index++) {
      if(personajeNombre == this.arrayPersonajes[index].character){
        this.arrayPersonajes.splice(this.arrayPersonajes[index], 1);
        console.log("personaje eliminado repetido" + this.arrayPersonajes[index]);
        
        eliminado = true;
        console.log(eliminado);
      } 
    }
    //console.log(eliminado);
    if(!eliminado){
      console.log("lista con personaje repetido eliminado" + this.arrayPersonajes);
      this.arrayPersonajes.splice(this.arrayPersonajes[0], 1);
    }
    //console.log(this.arrayPersonajes);
    this.arrayPersonajes.push(this.personaje)
    console.log("lista de personajes validada" +this.arrayPersonajes);
    
  }

  desordenarRespuestas()
  {
    this.arrayPersonajes.sort(function (){return Math.random() - 0.5} );
  }

  correcto(nombre:string){
    if(nombre == this.personaje.character){
      this.rtaCorrecta = true;
      this.mensaje = "Correcto!";
      console.log(this.mensaje);
    }
    this.tratarPersonajes();
  }

  onEmpezar(){
    this.empezar = true;
    this.validarRepetido(this.personaje.character);
  }
}
