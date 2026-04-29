import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent{

  account:any =[];
  accounts:any=[]

  constructor(private AccountService:AccountService){      
        AccountService.getaccounts().subscribe(
          (data:any)=>{
            this.accounts = data;
      },
      (err:any)=>{
        alert('server issue');
      }
    )
  }

  deleteAccount(id:string){
    this.AccountService.deleteaccount(id).subscribe(
      (data:any)=>{
        alert("deleted sucessfully")
      },
      (err:any)=>{
        alert("there is no data")
      }
    )

  }

  term:string="";

  filterAccount(){
   this.AccountService.getfilteredaccount(this.term).subscribe(
    (data:any)=>{
      this.accounts=data
      console.log(this.accounts)
    }
   )
  }

  pageaccounts(page:number){
    this.AccountService.getpagedaccounts(page).subscribe(
      (data:any)=>{
        this.account=data;
      },
      (err:any)=>{
        alert("error")
      }
    )
  }
}




