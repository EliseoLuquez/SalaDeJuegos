import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, data:any){
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.log(error);
    }
  }

  get(key: string){
    let usuario = localStorage.getItem(key);
    if(usuario)
    {
      return JSON.parse(usuario);
    }
  }

  remove(key: string){
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  }

  clear(){
    try {
      localStorage.clearItem();
    } catch (error) {
      console.log(error);
    }
  }
}
