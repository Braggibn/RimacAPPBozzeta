import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service'
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-coti',
  templateUrl: './coti.component.html',
  styleUrls: ['./coti.component.scss']
})
export class CotiComponent implements OnInit {
  sendPerson:FormGroup = new FormGroup(
    {
      document : new FormControl('',[Validators.required]),
      numDocument: new FormControl('',[Validators.required]),
      celular: new FormControl('',[Validators.required]),
      placa: new FormControl('',[Validators.required])
    }
  );
  personaRandom: any = '';
  nombre='';
  documento='';
  placa=''; 
  celular="";
  numDocument="";
  constructor(private apiservice: ApiService,
    private router : Router) { }

  ngOnInit(){
    this.getPerson()
  } 
  getPerson(){
    this.apiservice.getUser().subscribe(
      res=> {
        this.personaRandom = res;
        this.celular = this.personaRandom.results[0].cell;
        this.numDocument = this.personaRandom.results[0].location.postcode;
        this.placa = this.personaRandom.results[0].login.salt;
        // this.nombre = this.personaRandom.results[0].name.first;
        this.sendPerson.patchValue({
          numDocumento : this.numDocument,
          document: this.documento,
          celular: this.celular,
          placa: this.placa
        });
        
      },
      err=>{
      }
    )
    console.log(this.personaRandom)
  }
  onSubmit(){
    console.log(this.sendPerson.value)
    this.router.navigate(['/sinData'])
  }
  
}
