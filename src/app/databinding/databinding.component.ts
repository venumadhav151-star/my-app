import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  name:string = 'venu';
  age:number = 27;

  isInValid:boolean= true;

  phone:string = "+91";

  submit(){
    alert("submitted");
  }
}
