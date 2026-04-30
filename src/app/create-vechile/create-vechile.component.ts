import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechileService } from '../vechile.service';

@Component({
  selector: 'app-create-vechile',
  templateUrl: './create-vechile.component.html',
  styleUrls: ['./create-vechile.component.css']
})
export class CreateVechileComponent {

  vechileForm:FormGroup = new FormGroup({
    Vechile: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
  })

  constructor(private vechileService:VechileService){}

  
  submit(){
    console.log(this.vechileForm);
    this.vechileService.createVehicle(this.vechileForm.value).subscribe(
      (data:any)=>{
        alert("created sucessfully");
        this.vechileForm.reset();
      },
      (err:any)=>
        alert("creation failes")
    )
  }

}
