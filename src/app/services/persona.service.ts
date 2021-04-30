import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
import { Observable } from "rxjs";
 
@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  asegurado: Iuser []

    
  constructor() { 
      this.asegurado = [ ]
  }

  getUsuario(){
    if(localStorage.getItem('listaP') === null){
      return this.asegurado;
    }else{
      this.asegurado = JSON.parse(localStorage.getItem('listaP'));
      return this.asegurado;
    }
  }

  addUsuarios(user : Iuser){
    this.asegurado.push(user);
    let asegurado:Iuser[]= [];
    if(localStorage.getItem('listaP') === null){
      asegurado.push(user);
      localStorage.setItem('listaP', JSON.stringify(asegurado));
    }else{
      asegurado = JSON.parse(localStorage.getItem('listaP'));
      asegurado.push(user)
      localStorage.setItem('listaP', JSON.stringify(asegurado));
    }
  }

}
