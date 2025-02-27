import { Component, OnInit } from '@angular/core';
import { ApicustomerService } from '../services/apicustomer.service';
import {Response } from '../models/response'
@Component({
  selector: 'app-customer',
  standalone: false,
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements OnInit {
  public listCustomers:any[] = [];
  public myColumns: string [] = ['id','name'];
  constructor(
    private _apiCustomer: ApicustomerService 
  )
  {

  }
  ngOnInit(): void{
    this.getClientes();
  }
  getClientes(){
    this._apiCustomer.getCustomers().subscribe(response => {
      this.listCustomers = response.data;})
  }
}
