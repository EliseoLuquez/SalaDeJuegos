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

 carta = {src: '', numero: ''}
 cartaSiguiente = {src: '', numero: ''};
 cartasAux: any;
 cartas = [
    {"src": "../../../assets/mayormenor/Ace of Clubs.png", "numero": 1},
    {"src": "../../../assets/mayormenor/Two of Club", "numero": 2},
    {"src": "../../../assets/mayormenor/Three of Clubs", "numero": 3},
    {"src": "../../../assets/mayormenor/Four of Clubs.png", "numero": 4},
    {"src": "../../../assets/mayormenor/Five of Clubs.png", "numero": 5},
    {"src": "../../../assets/mayormenor/Six of Clubs.png", "numero": 6},
    {"src": "../../../assets/mayormenor/Seven of Clubs.png", "numero": 7},
    {"src": "../../../assets/mayormenor/Eight of Clubs", "numero": 8},
    {"src": "../../../assets/mayormenor/Nine of Clubs.png", "numero": 9},
    {"src": "../../../assets/mayormenor/Ten of Clubs.png", "numero": 10},
    {"src": "../../../assets/mayormenor/Jack of Clubs.png", "numero": 11},
    {"src": "../../../assets/mayormenor/Queen of Clubs.png", "numero": 12},
    {"src": "../../../assets/mayormenor/King of Clubs.png", "numero": 13},
    {"src": "../../../assets/mayormenor/Ace of Diamonds.png", "numero": 1},
    {"src": "../../../assets/mayormenor/Two of Diamonds.png", "numero": 2},
    {"src": "../../../assets/mayormenor/Three of Diamonds.png", "numero": 3},
    {"src": "../../../assets/mayormenor/Four of Diamonds.png", "numero": 4},
    {"src": "../../../assets/mayormenor/Five of Diamonds.png", "numero": 5},
    {"src": "../../../assets/mayormenor/Six of Diamonds.png", "numero": 6},
    {"src": "../../../assets/mayormenor/Seven of Diamonds.png", "numero": 7},
    {"src": "../../../assets/mayormenor/Eight of Diamonds.png", "numero": 8},
    {"src": "../../../assets/mayormenor/Nine of Diamonds.png", "numero": 9},
    {"src": "../../../assets/mayormenor/Ten of Diamonds.png", "numero": 10},
    {"src": "../../../assets/mayormenor/Jack of Diamonds.png", "numero": 11},
    {"src": "../../../assets/mayormenor/Queen of Diamonds.png", "numero": 12},
    {"src": "../../../assets/mayormenor/King of Diamonds.png", "numero": 13},
    {"src": "../../../assets/mayormenor/Ace of Spades.png", "numero": 1},
    {"src": "../../../assets/mayormenor/Two of Spades.png", "numero": 3},
    {"src": "../../../assets/mayormenor/Three of Spades.png", "numero": 2},
    {"src": "../../../assets/mayormenor/Four of Spades.png", "numero": 4},
    {"src": "../../../assets/mayormenor/Five of Spades.png", "numero": 5},
    {"src": "../../../assets/mayormenor/Six of Spades.png", "numero": 6},
    {"src": "../../../assets/mayormenor/Seven of Spades.png", "numero": 7},
    {"src": "../../../assets/mayormenor/Eight of Spades.png", "numero": 8},
    {"src": "../../../assets/mayormenor/Nine of Spades.png", "numero": 9},
    {"src": "../../../assets/mayormenor/Ten of Spades.png", "numero": 10},
    {"src": "../../../assets/mayormenor/Jack of Spades.png", "numero": 11},
    {"src": "../../../assets/mayormenor/Quenn of Spades.png", "numero": 12},
    {"src": "../../../assets/mayormenor/King of Spades.png", "numero": 13},
    {"src": "../../../assets/mayormenor/Ace of Hearts.png", "numero": 1},
    {"src": "../../../assets/mayormenor/Two of Hearts.png", "numero": 2},
    {"src": "../../../assets/mayormenor/Three of Hearts.png", "numero": 3},
    {"src": "../../../assets/mayormenor/Four of Hearts.png", "numero": 4},
    {"src": "../../../assets/mayormenor/Five of Hearts.png", "numero": 5},
    {"src": "../../../assets/mayormenor/Six of Hearts.png", "numero": 6},
    {"src": "../../../assets/mayormenor/Seven of Hearts.png", "numero": 7},
    {"src": "../../../assets/mayormenor/Eight of Hearts.png", "numero": 8},
    {"src": "../../../assets/mayormenor/Nine of Hearts.png", "numero": 9},
    {"src": "../../../assets/mayormenor/Ten of Hearts.png", "numero": 10},
    {"src": "../../../assets/mayormenor/Jack of Hearts.png", "numero": 11},
    {"src": "../../../assets/mayormenor/Queen of Hearts.png", "numero": 12},
    {"src": "../../../assets/mayormenor/King of Hearts.png", "numero": 13}
  ];
  mensaje!: string;
  puntos!: number;
  empezado: boolean = false;
  resultado: boolean = false;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    console.log(this.authService.usuario.logueado);
    
  }

  empezar(){
      this.cartasAux = this.cartas.slice();
      var i = Math.floor(Math.random()* this.cartasAux.length);
      // this.carta.elemento = this.cartasAux[i].elemento;
      // this.carta.numero = this.cartasAux[i].numero;

      this.carta.src = this.cartasAux[i].src;
      this.carta.numero = this.cartasAux[i].numero;
      delete this.cartasAux[0]['i'];
      this.puntos = 0;
      this.empezado = true;
      this.resultado = false;
  }

  proximaCarta(){
    if(this.cartasAux.length > 0){
      var i = Math.floor(Math.random()* this.cartasAux.length);
      this.cartaSiguiente.src = this.cartasAux[i].src;
      this.cartaSiguiente.numero = this.cartasAux[i].numero;
      delete this.cartasAux[i];
    }
    else{
      this.mensaje = "Ganaste!";
      this.resultado = true;
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
      this.resultado = true;
    }
    this.carta.numero = this.cartaSiguiente.numero;
    this.carta.src = this.cartaSiguiente.src;
    
    
    
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
      this.resultado = true;
    }
    this.carta.numero = this.cartaSiguiente.numero;
    this.carta.src = this.cartaSiguiente.src;
    
    
  }

}
