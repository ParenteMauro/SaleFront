import{Component} from '@angular/core'
import { MatDialogRef } from '@angular/material/dialog';
import { ApicustomerService } from '../../services/apicustomer.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../../models/customer';

@Component({
    templateUrl: 'dialogcustomer.component.html',
    standalone : false
})
export class DialogCustomerComponent{
    public name: string ="";
    constructor(
        public dialogRef: MatDialogRef<DialogCustomerComponent>,
        public apiCustomer: ApicustomerService,
        public snackBar: MatSnackBar,
        
    ){}
    
    close(){
        this.dialogRef.close();
    }

    addCustomer(){
       
        const customer:Customer = {name: this.name};
        this.apiCustomer.addCustomers(customer).subscribe(response =>{
            if(response.succes === true)
                this.dialogRef.close();
                this.snackBar.open('Customer successfully added','',{
                    duration: 2000
                })
            });
    }
}