import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vechile:any = [];

  constructor(private vechileservice:VechileService){
  vechileservice.getvechiles().subscribe(
    (data:any)=>{
      this.vechile =data;
    },
    (err:any)=>{
      alert("internal server eroor");
    }
  )

  }

}
