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
 
      return localStorage.getItem(key);

   
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
