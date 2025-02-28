import { Component, OnInit } from '@angular/core';
import { ApicustomerService } from '../services/apicustomer.service';
import {Response } from '../models/response'
import {DialogCustomerComponent} from './dialog/dialogcustomer.component';
import {MatDialog} from '@angular/material/dialog';

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
    private apiCustomer: ApicustomerService,
    private dialog:MatDialog
  )
  {

  }
  ngOnInit(): void{
    this.getCustomers();
  }
  getCustomers(){
    this.apiCustomer.getCustomers().subscribe(response => {
      this.listCustomers = response.data;})
  }
  openAdd(){
    const dialogRef = this.dialog.open(DialogCustomerComponent, {
      width: '300'
    });
    dialogRef.afterClosed().subscribe(result =>{
      this.getCustomers();
    });
  }
  
}

