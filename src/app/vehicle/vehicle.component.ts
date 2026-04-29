import { Component } from '@angular/core';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {

  vechile: any = [];

  constructor(private vechileservice: VechileService) {
    vechileservice.getvechiles().subscribe(
      (data: any) => {
        this.vechile = data;
      },
      (err: any) => {
        alert("internal server eroor");
      }
    )
  }

  column:string="";
  order:string="";

  sortvechiles(){
    this.vechileservice
    .getSortVechiles(this.column,this.order).subscribe(
      (data:any)=>{
        this.vechile=data;
      },
      (err:any)=>{
        alert("some ");
      }
        

    )
  }

  deleteVehicle(id: string) {
    this.vechileservice.deleteVehicle(id).subscribe(
      (data: any) => {
        alert("deleted sucess");
        location.reload();
      },
      (err: any) => {
        alert("delete failed");
      }
    )
  }
  term:string="";
  filterVechiles(){
    this.vechileservice.getfilterdvehicle(this.term).subscribe(
      (data:any)=>{
        this.vechile = data;
      },
      (err:any) =>{
        alert("server issue");
      }
        
    )
  }

  pageVechicles(page: number) {
    this.vechileservice.getpagedvechiles(page).subscribe(
      (data: any) => {
        this.vechile=data;
      },
      (err: any) => {
        alert("delete failed");
      }
    )
  }

}