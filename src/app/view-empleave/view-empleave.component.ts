import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-empleave',
  templateUrl: './view-empleave.component.html',
  styleUrls: ['./view-empleave.component.css']
})
export class ViewEmpleaveComponent implements OnInit {

  constructor(private api:ApiService) { 
    this.fetchdata()
  }

fetchdata=()=>{
  this.api.viewallleave().subscribe(
    (data)=>{this.leavedata=data}
  )
}

  leavedata:any=[]

  ngOnInit(): void {
  }

}
