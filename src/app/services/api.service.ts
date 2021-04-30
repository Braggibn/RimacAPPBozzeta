import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Iuser } from '../models/user';

 
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUser(){
    return this.http.get<Iuser>(`${this.baseUrl}`);
  }

}
