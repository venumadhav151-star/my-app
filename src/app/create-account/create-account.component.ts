import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {

  accountform:FormGroup= new FormGroup({

    account_name:new FormControl(),
    available_balance:new FormControl(),
    account_number:new FormControl(),
    city:new FormControl(),
    profie_picture:new FormControl(),
    ifsc_code:new FormControl(),
    id:new FormControl(),
  })

  constructor(private accountService:AccountService){}


  submit(){
    console.log(this.accountform);
    this.accountService.createAccount(this.accountform.value).subscribe(
      (data:any)=>{
        alert("account added sucessfully");
        this.accountform.reset();
      },
      (err:any)=>
        alert("some error")
        
    )
  }

}
