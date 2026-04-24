import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  states:string[] = ["telangana", "andhra", "kerala", "goa"];

  user:any = [
    {name:"venu", age:27},
    {name:"babu", age:47},
    {name:"hari", age:34},
    {name:"krish", age:120}
  ]

  show:boolean = true;

}
