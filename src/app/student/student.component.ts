import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {


  student:any = [];

  constructor(private studentservice:StudentService){
    studentservice.getstudent().subscribe(
      (data:any)=>{
        this.student=data;
      },
      (err:any)=>{
         alert("ayya "+err);
      }
       
    )
  }

}
