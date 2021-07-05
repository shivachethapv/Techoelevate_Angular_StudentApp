import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  constructor(private http:HttpClient) { }
  getAllStudent(){
    return this.http.get(" http://localhost:8080/searchAll");
  }
  addStudent(add){
    return this.http.post("http://localhost:8080/insertData",add)
  }
  deleteStudent(userId){
    return this.http.delete("http://localhost:8080/remove/"+userId)
  }
  updateStudent(userId,updatebody){
    return this.http.put("http://localhost:8080/update/"+userId,updatebody)
  }
}
