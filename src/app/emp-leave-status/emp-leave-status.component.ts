import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-leave-status',
  templateUrl: './emp-leave-status.component.html',
  styleUrls: ['./emp-leave-status.component.css']
})
export class EmpLeaveStatusComponent implements OnInit {

  constructor(private api:ApiService) {
    this.fetchdata()
   }
   empid=localStorage.getItem("empid")

fetchdata=()=>{
 let data={
  "empid":this.empid
 }
 this.api.empleavestatus(data).subscribe(
  (resp)=>{this.leavedata=resp}
 )
}


  leavedata:any=[]
  ngOnInit(): void {
  
  
  }

}
