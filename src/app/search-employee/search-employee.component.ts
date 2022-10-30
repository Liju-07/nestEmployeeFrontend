import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-employee',
  templateUrl: './search-employee.component.html',
  styleUrls: ['./search-employee.component.css']
})
export class SearchEmployeeComponent implements OnInit {

  constructor(private api:ApiService) { }



  empid=""
  name=""
  address=""
  number=""
   email=""
   username=""
   password=""
   dob=""
   jod=""


empdata:any=[]

  edit=()=>{

    this.api.updateemp(this.empdata[0]).subscribe()
    alert("Data Updated")
    
    }
    
    
      read=()=>{
        let data={
          "empid":this.empid
        }
        this.api.searchemp(data).subscribe(
          (res)=>{
            this.empdata=res
          }
        )
      }

  ngOnInit(): void {
  }

}
