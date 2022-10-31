import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-login',
  templateUrl: './emp-login.component.html',
  styleUrls: ['./emp-login.component.css']
})
export class EmpLoginComponent implements OnInit {

  constructor(private api:ApiService,private route:Router) { }


  password=""
  username=""
  
  empdata=()=>{
    let data={
      "username":this.username,
      "password":this.password
  
    }
    this.api.emplogin(data).subscribe(
      (res:any)=>{
        if(res.length>0)
        {
          alert("Login Success")
          localStorage.setItem("empid",res[0].empid)
          console.log(res[0].empid)
          this.route.navigate(['/emphome'])
        }
        else
        {
          alert("Login Failed")
        }
      }
    )
    
  }
  
  



  ngOnInit(): void {
  }

}
