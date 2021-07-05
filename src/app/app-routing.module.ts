import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentServiceService } from './student-service.service';
import { UpdateStudentComponent } from './update-student/update-student.component';



const routes: Routes = [
  {path:"add-student",component:StudentAddComponent},
  {path:"student-service",component:StudentServiceService},
  {path:"display-student",component:DisplayStudentComponent},
  {path:"update-student",component:UpdateStudentComponent},
  {path:"navbar",component:NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
