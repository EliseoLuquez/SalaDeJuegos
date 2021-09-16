import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  @Output() seCreaAbecedario: EventEmitter<any> = new EventEmitter<any>();

  palabras: string[] = ["casa", "perro"];
  palabra!: string;
  palabraEnGuiones!: string;
  letra = {"nombre": ''};
  letras = [{"nombre": 'A'},{"nombre": 'B'},{"nombre": 'C'},{"nombre": 'D'},{"nombre": 'E'},{"nombre": 'F'},{"nombre": 'G'},{"nombre": 'H'},
  {"nombre": 'I'},{"nombre": 'J'},{"nombre": 'K'},{"nombre": 'L'},{"nombre": 'M'},{"nombre": 'N'},{"nombre": 'Ñ'},{"nombre": 'O'},
  {"nombre": 'P'},{"nombre": 'Q'},{"nombre": 'R'},{"nombre": 'S'},{"nombre": 'T'},{"nombre": 'U'},{"nombre": 'V'},{"nombre": 'W'},
  {"nombre": 'X'},{"nombre": 'Y'},{"nombre": 'Z'}]; 
  arrayLetras: any = [];
  errores!: number;
  mensaje!: string;

  constructor() { }

  ngOnInit(): void {
    this.crearAbecedario();
  }

  empezar(){
    this.palabra = this.palabras[Math.floor(Math.random()*this.palabras.length)];
    this.palabraEnGuiones = this.palabra.replace(/./g, "_ ");
    console.log(this.palabra);
    console.log(this.palabra + ' - ' + this.palabraEnGuiones);
    this.errores = 0;
    
  }

  crearAbecedario(){
    this.letras.forEach(element => {
      let instancia = {nombre: element.nombre};
      this.seCreaAbecedario.emit(instancia);
      console.log(instancia);
      this.agregarNuevoProducto(instancia);
    });
  }
  
  onLetra(letra: string){
    console.log(letra);
    console.log(this.palabra);

    let coincidencias = 0;

    for (let index = 0; index < this.palabra.length; index++) {
      const element = this.palabra[index];
      
      if(letra.toLowerCase() == element){
        console.log('letra correcta');
        console.log(element);
        this.palabraEnGuiones = this.replaceAt(index*2, element);
       // this.palabraEnGuiones = this.palabraEnGuiones.replace(, element);
        console.log(this.palabraEnGuiones);
        coincidencias++;
      }
    }

    if(coincidencias == 0){
      this.errores++;
      console.log(coincidencias);
      
      console.log(this.errores);
      this.cambiarImagen();
      
    }

    
  }

  replaceAt(index: number, char: string) {
    var a = this.palabraEnGuiones.split("");
    a[index] = char;
    return a.join("");
  }

  agregarNuevoProducto(letra: any){
    this.arrayLetras.push(letra);
  }

  cambiarImagen()
  {
    switch(this.errores){
      case 1:
        console.log(this.errores);
        document.querySelector("#horca")?.setAttribute("src", "../../../assets/ahorcado/cabeza.jpg");
        break;
      case 2:
        document.querySelector("#horca")?.setAttribute("src", "../../../assets/ahorcado/cuerpo.jpg");
        break;
      case 3:
        document.querySelector("#horca")?.setAttribute("src", "../../../assets/ahorcado/brazoIzq.jpg");
        break;
      case 4:
        document.querySelector("#horca")?.setAttribute("src", "../../../assets/ahorcado/brazoDer.jpg");
        break;
      case 5:
        document.querySelector("#horca")?.setAttribute("src", "../../../assets/ahorcado/pieIzq.jpg");
        break;
      case 6:
        document.querySelector("#horca")?.setAttribute("src", "../../../assets/ahorcado/pieDer.jpg");
        break
      case 7:
        document.querySelector("#horca")?.setAttribute("src", "../../../assets/ahorcado/derrota.jpg");
        this.mensaje = "Perdiste!!!";
        break
    }
  }
}
  
 





