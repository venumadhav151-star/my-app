import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName } from '@angular/forms';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent {

  userform:FormGroup = new FormGroup({
    name: new FormControl(),
    age: new FormControl(),
    phone: new FormControl(),
    email: new FormControl(),

    address: new FormGroup({
      city: new FormControl(),
      pin: new FormControl(),
    }),
    cards: new FormArray([])
  })

  




  submit(){
      console.log(this.userform);
    }

}
