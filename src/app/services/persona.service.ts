import { Injectable } from '@angular/core';
import { Iuser } from '../models/user';
 
@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  asegurado: Iuser []

    
  constructor() { 
      this.asegurado = [
          // {name: 'string', type: 'string' , atack: 1 ,defens: 22, espcial: 22}
      ];
  }

  getUsuario(){
    if(localStorage.getItem('listaP') === null){
      return this.asegurado;
    }else{
      this.asegurado = JSON.parse(localStorage.getItem('listaP'));
      return this.asegurado;
    }
  }

  captureUsuario(usuario : Iuser){
    this.asegurado.push(usuario)
    let asegurados : Iuser[] = [];
    if(localStorage.getItem('listaP')===null){
      asegurados.push(usuario)
      localStorage.setItem('listaP' , JSON.stringify(asegurados))
    }else{
      asegurados = JSON.parse(localStorage.getItem('listaP'));
      asegurados.push(usuario);
      localStorage.setItem('listaP', JSON.stringify(asegurados));

    }
    
  }

}
