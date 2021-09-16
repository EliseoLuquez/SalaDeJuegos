import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-letra',
  templateUrl: './letra.component.html',
  styleUrls: ['./letra.component.css']
})
export class LetraComponent implements OnInit {

  @Output() seCreaAbecedario: EventEmitter<any> = new EventEmitter<any>();

  letra!: string;
  letras: string[] = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 

  constructor() {
   }

  ngOnInit(): void {
    //this.crearAbecedario();
  }

  
  // crearAbecedario(){
  //   this.letras.forEach(element => {
  //     let instancia = element;
  //     this.seCreaAbecedario.emit(instancia);
  //     console.log(instancia);
  //   });
  // }
}
