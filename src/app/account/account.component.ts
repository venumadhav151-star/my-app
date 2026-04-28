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

  constructor(private AccountService:AccountService){      
        AccountService.getaccounts().subscribe(
          (data:any)=>{
            this.account = data;
      },
      (err:any)=>{
        alert('server issue');
      }
    )
  }
}



