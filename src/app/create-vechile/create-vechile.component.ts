import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VechileService } from '../vechile.service';
import { ActivatedRoute } from '@angular/router';

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

  id:string="";
  constructor(private vechileService:VechileService, private activatedRoute:ActivatedRoute){
    activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        vechileService.getVechile(data.id).subscribe(
          (data:any)=>{
            this.vechileForm.patchValue(data);
          }
        )
      }
        
    )
  }

 
  submit(){
    if(this.id){
      //edit
      this.vechileService.editVehicle(this.id,this.vechileForm.value).subscribe(
        (data:any)=>{
          alert("edited sucess");
          this.vechileForm.reset();
        },
        (err:any)=>{
          alert("edit failed");
        }
      )
    }
    else{
      //create
      this.vechileService.createVehicle(this.vechileForm.value).subscribe(
      (data:any)=>{
        alert("created sucessfully");
        this.vechileForm.reset();
      },
      (err:any)=>{
        alert("creation failes")
      }
    )

    }
    console.log(this.vechileForm);
    
  }

}
