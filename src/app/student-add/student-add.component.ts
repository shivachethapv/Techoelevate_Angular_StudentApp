import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private ps:StudentServiceService) { }

  form:any=FormGroup;

  ngOnInit(): void {
    this.form=new FormGroup({
      userId:new FormControl(''),
      name:new FormControl(''),
      email:new FormControl(''),
      marks:new FormControl(''),
      grade:new FormControl('')

    });
  }
  get userId(){
    return this.form.get('userId')
  }
  get name(){
    return this.form.get('name')
  }
  get email(){
    return this.form.get('email')
  }
  get marks(){
    return this.form.get('marks')
  }
  get grade(){
    return this.form.get('grade')
  }
  postStudent(){
    let product=this.form.value;
    this.ps.addStudent(product).subscribe(data =>{
      alert('added succesfully');
    })
  

  }
}
