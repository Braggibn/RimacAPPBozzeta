import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { PersonaService } from '../../services/persona.service';
import { Iuser } from 'src/app/models/user';

@Component({
  selector: 'app-sin-data',
  templateUrl: './sin-data.component.html',
  styleUrls: ['./sin-data.component.scss']
})
export class SinDataComponent implements OnInit {
  nombreAfi : Iuser [];
  sendCasus:FormGroup = new FormGroup(
    {
      fecha : new FormControl('',[Validators.required]),
      marca: new FormControl('',[Validators.required]),
      gas: new FormControl('',[Validators.required]),
      sumaCasuistica: new FormControl('',[Validators.required])
    } 
  );
  public sumaCasuistica : number;
   i=14000
  constructor(private router : Router,
    private seguroService: PersonaService,
    private _location: Location) { }
  
  ngOnInit(){
      this.nombreAfi = this.seguroService.getUsuario();  }
  increment(){
    if(this.i !=16500){
      this.i+= 100;
      this.sumaCasuistica=this.i;
    }
    
  }
  

  decrement(){
    if(this.i !=12500){
      this.i-=100;
      this.sumaCasuistica=this.i;
    }
  }
  onSubmit(){
    this.seguroService.addUsuarios(
      this.sendCasus.value
    )
    console.log("hola",this.sendCasus.value)
    this.router.navigate(['/plan'])
  }
  backClicked() {
    this._location.back();
  }
}
