import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpclient: HttpClient) { }

    getmail():Observable <any>{
      return this.httpclient.get("https://jsonplaceholder.typicode.com/todos");
    
  }
}
