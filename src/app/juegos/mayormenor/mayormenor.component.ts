import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { IngresoModule } from 'src/app/ingreso/ingreso.module';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-mayormenor',
  templateUrl: './mayormenor.component.html',
  styleUrls: ['./mayormenor.component.css']
})
export class MayormenorComponent implements OnInit {

 carta = {elemento: '', numero: ''}
 cartaSiguiente = {elemento: '', numero: ''};
 cartasAux: any;
 cartas = [
    {"elemento": "Basto", "numero": 1},
    {"elemento": "Basto", "numero": 2},
    {"elemento": "Basto", "numero": 3},
    {"elemento": "Basto", "numero": 4},
    {"elemento": "Basto", "numero": 5},
    {"elemento": "Basto", "numero": 6},
    {"elemento": "Basto", "numero": 7},
    {"elemento": "Basto", "numero": 8},
    {"elemento": "Basto", "numero": 9},
    {"elemento": "Basto", "numero": 10},
    {"elemento": "Basto", "numero": 11},
    {"elemento": "Basto", "numero": 12},
    {"elemento": "Oro", "numero": 1},
    {"elemento": "Oro", "numero": 2},
    {"elemento": "Oro", "numero": 3},
    {"elemento": "Oro", "numero": 4},
    {"elemento": "Oro", "numero": 5},
    {"elemento": "Oro", "numero": 6},
    {"elemento": "Oro", "numero": 7},
    {"elemento": "Oro", "numero": 8},
    {"elemento": "Oro", "numero": 9},
    {"elemento": "Oro", "numero": 10},
    {"elemento": "Oro", "numero": 11},
    {"elemento": "Oro", "numero": 12},
    {"elemento": "Espada", "numero": 1},
    {"elemento": "Espada", "numero": 2},
    {"elemento": "Espada", "numero": 3},
    {"elemento": "Espada", "numero": 4},
    {"elemento": "Espada", "numero": 5},
    {"elemento": "Espada", "numero": 6},
    {"elemento": "Espada", "numero": 7},
    {"elemento": "Espada", "numero": 8},
    {"elemento": "Espada", "numero": 9},
    {"elemento": "Espada", "numero": 10},
    {"elemento": "Espada", "numero": 11},
    {"elemento": "Espada", "numero": 12},
    {"elemento": "Copa", "numero": 1},
    {"elemento": "Copa", "numero": 2},
    {"elemento": "Copa", "numero": 3},
    {"elemento": "Copa", "numero": 4},
    {"elemento": "Copa", "numero": 5},
    {"elemento": "Copa", "numero": 6},
    {"elemento": "Copa", "numero": 7},
    {"elemento": "Copa", "numero": 8},
    {"elemento": "Copa", "numero": 9},
    {"elemento": "Copa", "numero": 10},
    {"elemento": "Copa", "numero": 11},
    {"elemento": "Copa", "numero": 12},
  ];
  mensaje!: string;
  puntos!: number;
  empezado: boolean = false;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.usuario.logueado);
    
  }

  empezar(){
      this.cartasAux = this.cartas.slice();
      var i = Math.floor(Math.random()* this.cartasAux.length);
      this.carta.elemento = this.cartasAux[i].elemento;
      this.carta.numero = this.cartasAux[i].numero;
      //this.cartasAux[0].splice(i, 1);
      //console.log(this.cartasAux[i]);
      delete this.cartasAux[0]['i'];
      this.puntos = 0;
      this.empezado = true;
  }

  proximaCarta(){
    if(this.cartasAux.length > 0){
      var i = Math.floor(Math.random()* this.cartasAux.length);
      this.cartaSiguiente.elemento = this.cartasAux[i].elemento;
      this.cartaSiguiente.numero = this.cartasAux[i].numero;
      delete this.cartasAux[i];
    }
    else{
      this.mensaje = "Ganaste!";
    }
  }
 
  cartaMayor(){
    this.proximaCarta();
    
    if(this.carta.numero <= this.cartaSiguiente.numero){
      console.log(this.carta.numero + '<=' + this.cartaSiguiente.numero);
      this.puntos += 10;
    }
    else{
      console.log('Perdiste!');
      this.mensaje = "Perdiste!";
      this.puntos = 0;
      this.empezado = false;
    }
    this.carta.numero = this.cartaSiguiente.numero;
    this.carta.elemento = this.cartaSiguiente.elemento;
    
    
    
  }

  cartaMenor(){
    //this.empezar();

    this.proximaCarta();

    if(this.carta.numero >= this.cartaSiguiente.numero){
      console.log(this.carta.numero + '>=' + this.cartaSiguiente.numero);
      this.puntos += 10;
    }
    else{
      console.log('Perdiste!');
      this.mensaje = "Perdiste!";
      this.puntos = 0;
      this.empezado = false;
    }
    this.carta.numero = this.cartaSiguiente.numero;
    this.carta.elemento = this.cartaSiguiente.elemento;
    
    
  }

}
