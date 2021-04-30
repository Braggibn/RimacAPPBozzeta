import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from '../../services/persona.service';
import { Iuser } from 'src/app/models/user';
@Component({
  selector: 'app-plan-d',
  templateUrl: './plan-d.component.html',
  styleUrls: ['./plan-d.component.scss']
})
export class PlanDComponent implements OnInit {
  coberturas : Iuser [];
  sendCasus:FormGroup = new FormGroup(
    {
       sumaCasuistica: new FormControl('',[Validators.required])
    }
  );
  constructor(private router : Router,
    private _location: Location, private seguroService : PersonaService) { }
    public sumaCasuistica : number;
    i=20
  ngOnInit(): void {
    this.coberturas = this.seguroService.getUsuario();
  }
  onSubmit(){
    this.sendCasus.setValue({
      sumaCasuistica: this.i,
       });
    console.log(this.sendCasus.value)
    this.router.navigate(['/last'])
  }
  backClicked() {
    this._location.back();
  }
  agregar(){
        this.i+= 15;
      this.sumaCasuistica=this.i;
        var someElement= document.getElementById('continuar2');
            someElement.classList.add('Movil')
        var someElement2= document.getElementById('continuar1');
            someElement2.classList.remove('Movil')
  }
  quitar(){
    this.i-= 15;
    this.sumaCasuistica=this.i;
    var someElement= document.getElementById('continuar2');
        someElement.classList.remove('Movil')
    var someElement2= document.getElementById('continuar1');
        someElement2.classList.add('Movil')
    
  }
  agregarChoque(){
    this.i+= 20;
    this.sumaCasuistica=this.i;
      var someElement= document.getElementById('continuar22');
      someElement.classList.add('Movil')
      var someElement2= document.getElementById('continuar12');
      someElement2.classList.remove('Movil')
  }
  quitarChoque(){
    this.i-= 20;
    this.sumaCasuistica=this.i;
    var someElement= document.getElementById('continuar22');
        someElement.classList.remove('Movil')
    var someElement2= document.getElementById('continuar12');
        someElement2.classList.add('Movil')
  }

  agregarAtropello(){
    this.i+= 50;
    this.sumaCasuistica=this.i;
    var someElement= document.getElementById('continuar23');
        someElement.classList.add('Movil')
    var someElement2= document.getElementById('continuar13');
        someElement2.classList.remove('Movil')
  }
  quitarAtropello(){
    this.i-= 50;
    this.sumaCasuistica=this.i;
    var someElement= document.getElementById('continuar23');
        someElement.classList.remove('Movil')
    var someElement2= document.getElementById('continuar13');
        someElement2.classList.add('Movil')
  }
  
  
}
