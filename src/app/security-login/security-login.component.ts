import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-security-login',
  templateUrl: './security-login.component.html',
  styleUrls: ['./security-login.component.css']
})
export class SecurityLoginComponent implements OnInit {

  constructor(private api:ApiService,private route:Router) { }

  password=""
  username=""
  
  securitydata=()=>{
    let data={
      "username":this.username,
      "password":this.password

    }
    this.api.securitylogin(data).subscribe(
      (res:any)=>{
        if(res.length>0)
        {
          alert("Login Success")
          localStorage.setItem("sid",res[0].sid)
          this.route.navigate(['/securityhome'])
        }
else{
  
}
      }
    )


  }

  ngOnInit(): void {
  }

}
