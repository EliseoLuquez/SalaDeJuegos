import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-juegopropio',
  templateUrl: './juegopropio.component.html',
  styleUrls: ['./juegopropio.component.css']
})
export class JuegopropioComponent implements OnInit {

  imagenes = [
    {src:'../../../assets/flechas/arriba.jpg', direccion:"arriba"},
    {src:'../../../assets/flechas/abajo.jpg', direccion:"abajo"},
    {src:'../../../assets/flechas/derecha.jpg', direccion:"derecha"},
    {src:'../../../assets/flechas/izquierda.jpg', direccion:"izquierda"},
    {src:'../../../assets/flechas/arriba1.jpg', direccion:"arriba"},
    {src:'../../../assets/flechas/abajo1.jpg', direccion:"abajo"},
    {src:'../../../assets/flechas/derecha1.jpg', direccion:"derecha"},
    {src:'../../../assets/flechas/izquierda1.jpg', direccion:"izquierda"},
    {src:'../../../assets/flechas/arriba2.jpg', direccion:"arriba"},
    {src:'../../../assets/flechas/abajo2.jpg', direccion:"abajo"},
    {src:'../../../assets/flechas/derecha2.jpg', direccion:"derecha"},
    {src:'../../../assets/flechas/izquierda2.jpg', direccion:"izquierda"},
    {src:'../../../assets/flechas/arriba3.jpg', direccion:"arriba"},
    {src:'../../../assets/flechas/abajo3.jpg', direccion:"abajo"},
    {src:'../../../assets/flechas/derecha3.jpg', direccion:"derecha"},
    {src:'../../../assets/flechas/izquierda3.jpg', direccion:"izquierda"},
    {src:'../../../assets/flechas/arriba4.jpg', direccion:"arriba"},
    {src:'../../../assets/flechas/abajo4.jpg', direccion:"abajo"},
    {src:'../../../assets/flechas/derecha4.jpg', direccion:"derecha"},
    {src:'../../../assets/flechas/izquierda4.jpg', direccion:"izquierda"},
    {src:'../../../assets/flechas/arriba5.jpg', direccion:"arriba"},
    {src:'../../../assets/flechas/abajo5.jpg', direccion:"abajo"},
    {src:'../../../assets/flechas/derecha5.jpg', direccion:"derecha"},
    {src:'../../../assets/flechas/izquierda5.jpg', direccion:"izquierda"},
  ];
  currentImage: any = "";
  puntaje: number = 0;
  empezado:boolean = false;

  constructor(public router: Router, public authService: AuthService) { }

  ngOnInit(): void {
    // setInterval(() => {
    //   //cada 5 segundos elegimos una imagen al azar
    //   this.currentImage = this.updateRandomImage();
    // }, 2000);
    
  }

  empezar(){
    this.currentImage = this.updateRandomImage();
    this.empezado = true;
  }

  updateRandomImage() {
    const i = Math.floor(Math.random() * (this.imagenes.length - 1)) + 0;
    return this.imagenes[i];
  }

  getImage() {
    return this.currentImage.src;
  }

  onArriba(){
    console.log(this.currentImage.direccion);
    if(this.currentImage.direccion.includes("arriba")){
      this.puntaje += 10;
      this.currentImage = this.updateRandomImage();
    }
    else
    {
      this.puntaje -=5;
      this.currentImage = this.updateRandomImage();
    }
  }

  onAbajo(){
    console.log(this.currentImage.direccion);
    if(this.currentImage.direccion.includes("abajo")){
      this.puntaje += 10;
      this.currentImage = this.updateRandomImage();
    }
    else
    {
      this.puntaje -=5;
      this.currentImage = this.updateRandomImage();
    }
  }

  onIzquierda(){
    console.log(this.currentImage.direccion);
    if(this.currentImage.direccion.includes("izquierda")){
      this.puntaje += 10;
      this.currentImage = this.updateRandomImage();
    }
    else
    {
      this.puntaje -=5;
      this.currentImage = this.updateRandomImage();
    }
  }
  
  onDerecha(){
    console.log(this.currentImage.direccion);
    if(this.currentImage.direccion.includes("derecha")){
      this.puntaje += 10;
      this.currentImage = this.updateRandomImage();
    }
    else
    {
      this.puntaje -=5;
      this.currentImage = this.updateRandomImage();
    }
  }

}
