import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VechileService {

  constructor( private httpClient:HttpClient) {}

  baseUrl:string ="https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";
  //baseUrl:string ="/assets/vehicles.json";

  getvechiles():Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=1");
  }

  getVechile(id:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id);
  }

  getSortVechiles(coloumn:string, order:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+coloumn+"&order="+order);
  }

  deleteVehicle(id:string):Observable<any>{
    return this.httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/" +id);
  }

  getfilterdvehicle(term:string):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term);
  }

  getpagedvechiles(page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page="+page);
  }
  getvechileswithparams(term:string, coloumn:string,order:string, page:number):Observable<any>{
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter="+term+"&sortBy="+coloumn+"&order="+order+"&limit=10&page="+page);
  }

  createVehicle(vehicle:any):Observable<any>{
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
  }

  editVehicle(id:string,vehicle:any):Observable<any>{
    return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,vehicle);

}
}
