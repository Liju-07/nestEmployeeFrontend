import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private api:ApiService,private route:Router) { }

  empid=""
  name=""
  address=""
  number=""
   email=""
   username=""
   password=""
   dob=""
   jod=""



empreg=()=>{
  let data={
    "name":this.name,
    "empid":this.empid,
    "address":this.address,
    "number":this.number,
     "email":this.email,
     "password":this.password,
     "dob":this.dob,
     "jod":this.jod,
     "username":this.username
  }
  console.log(data)

  this.api.addemp(data).subscribe()
  alert("Data Added")
  this.route.navigate(['/adminhome'])
  }
  


  ngOnInit(): void {
  }

}
