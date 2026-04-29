import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( private httpclient:HttpClient) { }

  getweather(): Observable<any>{
    return this.httpclient.get()

  }
}
