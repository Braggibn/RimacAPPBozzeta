import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { FormBuilder, FormControl, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-plan-d',
  templateUrl: './plan-d.component.html',
  styleUrls: ['./plan-d.component.scss']
})
export class PlanDComponent implements OnInit {
  sendCasus:FormGroup = new FormGroup(
    {
      año : new FormControl('',[Validators.required]),
      marca: new FormControl('',[Validators.required]),
      gas: new FormControl('',[Validators.required]),
      sumaCasuistica: new FormControl('',[Validators.required])
    }
  );
  constructor(private router : Router,
    private _location: Location) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.router.navigate(['/last'])
  }
  backClicked() {
    this._location.back();
  }
}
