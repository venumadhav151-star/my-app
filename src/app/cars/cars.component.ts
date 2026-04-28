import { Component } from '@angular/core';
import { concat } from 'rxjs';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  searchtype:string="";

  // 🧱 original data
  allcars: any[] = [
    { name: "A6", price: 4000, year: 2020, sold: true, rating: 3.9 },
    { name: "M6", price: 400, year: 2023, sold: false, rating: 4.9 },
    { name: "Q3", price: 403, year: 2022, sold: false, rating: 2.4 },
    { name: "etron", price: 1000, year: 2021, sold: true, rating: 1.9 },
    { name: "i10", price: 400, year: 2021, sold: true, rating: 2.9 },
    { name: "i20", price: 2000, year: 2024, sold: false, rating: 1.9 }
  ];

  // 📊 display data
  cars: any[] = [...this.allcars];


  // submit button = add all the prices 

  submit(){
    const total= this.cars.reduce((sum:Number, car:any)=>sum + car.price,0);
    alert("submit: " +total);

  }
}