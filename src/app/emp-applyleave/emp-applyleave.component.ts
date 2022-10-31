import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-emp-applyleave',
  templateUrl: './emp-applyleave.component.html',
  styleUrls: ['./emp-applyleave.component.css']
})
export class EmpApplyleaveComponent implements OnInit {

  constructor(private api:ApiService) { }

  description=""
  
  type=""
       empid=localStorage.getItem("empid")
   
       leaveDate=""
        

        leave=()=>{
          let data={

            "description":this.description,
          
          "type":this.type,
         "empid":this.empid,
    
    "leaveDate":this.leaveDate
       
          }
          console.log(data)
this.api.empleave(data).subscribe()
alert("leave applyed")
this.description=""
  
this.type=""
this.empid=""
 
this.leaveDate=""
        }

  ngOnInit(): void {
  }

}
