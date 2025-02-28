import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response } from '../models/response'
import { Customer } from '../models/customer';

const httpOption = {
  headers: new HttpHeaders({
    'Contend-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class ApicustomerService {
  url: string = "https://localhost:7005/api/customer";
  constructor(
    private _http: HttpClient
  ) { }
  getCustomers(): Observable<Response>{
      return this._http.get<Response>(this.url);
  }
  addCustomers(customer:Customer) : Observable<Response>{
      return this._http.post<Response>(this.url, customer, httpOption)
  }
}
