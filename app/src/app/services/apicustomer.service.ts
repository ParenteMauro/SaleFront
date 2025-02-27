import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Response } from '../models/response'
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
}
