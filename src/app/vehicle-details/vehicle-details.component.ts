import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
    vehicle:any= {};

 
  constructor(private activatedRoute:ActivatedRoute, 
    private vehicleService:VechileService){
    activatedRoute.params.subscribe(
      (data:any)=>{
        vehicleService.getVechile(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          }
        )
      }
    )
  }
}


