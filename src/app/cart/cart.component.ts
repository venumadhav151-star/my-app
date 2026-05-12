import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartCount:number = 0;

  constructor(private commonService:CommonService){
    commonService.getcount().subscribe(
      (data:any)=>{
        this.cartCount=data;
      }
    )
  }



}
