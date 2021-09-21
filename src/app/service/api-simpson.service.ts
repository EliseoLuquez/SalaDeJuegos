import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiSimpsonService {

  constructor(private http: HttpClient) { }

  public obtenerPersonajes(){
    return this.http.get('https://thesimpsonsquoteapi.glitch.me/quotes');
  }
}
