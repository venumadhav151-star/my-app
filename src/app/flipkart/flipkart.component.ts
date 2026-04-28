import { Component } from '@angular/core';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkart',
  templateUrl: './flipkart.component.html',
  styleUrls: ['./flipkart.component.css']
})
export class FlipkartComponent {

  flipkart:any = [];

  constructor(private flipkartservice:FlipkartService){
    flipkartservice.getflipkart().subscribe(
      (data:any)=>{
        this.flipkart=data;
      },
      (err:any)=>{
        alert('some issue');
      }
    )
  }
  

}
