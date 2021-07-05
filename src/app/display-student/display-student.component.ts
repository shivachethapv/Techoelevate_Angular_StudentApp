import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent implements OnInit {

  constructor(private ps:StudentServiceService) { }
  userId:any;
  name:any;
  marks:any;
  email:any;
  isLoading:boolean;
  student:any;
  ngOnInit(): void {
    this.getData();
  }
  getData(){
    this.isLoading=true;
    this.ps.getAllStudent().subscribe(data =>{
      this.isLoading=false;
       this.student=data;
    })
  }
  removeStudents(userId){
    this.ps.deleteStudent(userId).subscribe(data=>{
      alert('deleted SuccesFully');

    })
  }

}
