import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PersonaService } from '../../services/persona.service';

@Component({
  selector: 'app-coti',
  templateUrl: './coti.component.html',
  styleUrls: ['./coti.component.scss']
})
export class CotiComponent implements OnInit {
  sendPerson:FormGroup = new FormGroup(
    {
      document : new FormControl('',[Validators.required]),
      numDocumento: new FormControl('',[Validators.required,Validators.minLength(8)]),
      celular: new FormControl('',[Validators.required,Validators.minLength(9)]),
      placa: new FormControl('',[Validators.required,Validators.minLength(8)]),
      nombre: new FormControl('',[Validators.required,Validators.minLength(3)]),
      acepta: new FormControl('',[Validators.required])
    }
  );


  personaRandom: any = '';
  nombre='';
  documento='';
  placa=''; 
  celular="";
  numDocument="";
  acepta="";
  constructor(private apiservice: ApiService, public seguroService : PersonaService,
    private router : Router) { }

  ngOnInit(){
    this.getPerson();
  } 
  getPerson(){
    this.apiservice.getUser().subscribe(
      (res :any)=> {
        console.log(res.results[0])
        this.personaRandom = res.results[0];
        this.celular = this.personaRandom.cell
        this.numDocument = this.personaRandom.location.postcode
        this.placa = this.personaRandom.login.salt
        this.nombre = this.personaRandom.name.first
        this.sendPerson.setValue({
          nombre: this.nombre,
          celular: this.celular,
          numDocumento : this.numDocument,
          document: this.documento,
          placa: this.placa ,
          acepta: this.acepta
           });
      },
      err=>{
      }
    )
    
  }
  onSubmit(){
    this.seguroService.addUsuarios(
      this.sendPerson.value
    )
    console.log("hola",this.sendPerson.value)
    this.router.navigate(['/sinData'])
  }
  
}
