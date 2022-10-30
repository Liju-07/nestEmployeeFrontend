import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewsec',
  templateUrl: './viewsec.component.html',
  styleUrls: ['./viewsec.component.css']
})
export class ViewsecComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetchdata()
  }



  fetchdata=()=>{
    this.api.viewsec().subscribe(
  (data)=>{
    this.SecData=data
  }
    )
  }
  
  SecData:any=[]
  
    
  
    delete=(sid:any)=>{
      let data={
   "sid":sid
      }
       this.api.secdelete(data).subscribe()
       alert("Employee Deleted")
       
   
     }
  
  


  ngOnInit(): void {
  }

}
