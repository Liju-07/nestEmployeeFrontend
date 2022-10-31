import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-leave-approve',
  templateUrl: './leave-approve.component.html',
  styleUrls: ['./leave-approve.component.css']
})
export class LeaveApproveComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetchdata()
  }


  fetchdata=()=>{
    
this.api.leavereq().subscribe(
  (data)=>{
  this.leavedata=data
  }
)
  }
  
leavedata:any=[]

vakue2=2
value=1
empid=""
status=""

approve=(empid:any)=>{
  let data={
    "empid":this.empid,
    "status":this.value
    
  }
  this.api.leavestatus(data).subscribe()
}


Empid=""

decline=(Empid:any)=>{
  let data={
    "empid":Empid,
    "status":this.vakue2
   
  }
  console.log(data)
  this.api.leavestatus(data).subscribe()
}




  ngOnInit(): void {
  }

}
