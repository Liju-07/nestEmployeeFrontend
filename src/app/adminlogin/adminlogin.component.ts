import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  constructor(private route:Router) { }


password=""
username=""

admindata=()=>{
  let data={
    "username":this.username,
    "password":this.password

  }
  if(this.username=="admin" && this.password=="admin")
  {
    alert("Login success")
    this.route.navigate(['/adminhome'])
  }
  else
  {
    alert("invalid username or password")
  }
}


  ngOnInit(): void {
  }

}
