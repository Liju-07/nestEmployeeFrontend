import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-sec',
  templateUrl: './add-sec.component.html',
  styleUrls: ['./add-sec.component.css']
})
export class AddSecComponent implements OnInit {

  constructor(private api:ApiService,private route:Router) { }


  sid=""
  name=""
  address=""
  number=""
   username=""
   password=""
   doj=""

secreg=()=>{
  let data={
    "name":this.name,
    "sid":this.sid,
    "address":this.address,
    "number":this.number,
     "password":this.password,
     "doj":this.doj,
     "username":this.username
  }
  console.log(data)

  this.api.addsec(data).subscribe()
  alert("Data Added")
  this.route.navigate(['/adminhome'])
}


  ngOnInit(): void {
  }

}
