import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewemp',
  templateUrl: './viewemp.component.html',
  styleUrls: ['./viewemp.component.css']
})
export class ViewempComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetchdata()
  }


fetchdata=()=>{
  this.api.viewemp().subscribe(
(data)=>{
  this.Empdata=data
}
  )
}



  Empdata:any=[]

  delete=(empid:any)=>{
    let data={
 "empid":empid
    }
     this.api.empdelete(data).subscribe()
     alert("Employee Deleted")
     
 
   }


  ngOnInit(): void {
  }

}
