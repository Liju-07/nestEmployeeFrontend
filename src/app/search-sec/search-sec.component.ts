import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-sec',
  templateUrl: './search-sec.component.html',
  styleUrls: ['./search-sec.component.css']
})
export class SearchSecComponent implements OnInit {

  constructor(private api:ApiService) {
  
   }
   edit=()=>{
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
    this.api.updatesec(this.SecData[0]).subscribe()
    alert("Data Updated")
    
    }
    
    
    sid=""
    name=""
    address=""
    number=""
     username=""
     password=""
     doj=""



      read=()=>{
        let data={
         
    "sid":this.sid
        }
        console.log(data)
        this.api.searchsec(data).subscribe(
          (res)=>{
            this.SecData=res
          }
        )
      }


  
  SecData:any=[]

  ngOnInit(): void {
  }

}
