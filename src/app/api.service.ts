import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  emplogin=(data:any)=>{
    return this.http.post("http://localhost:8080/loginemployee",data)
  }

  securitylogin=(data:any)=>{
    return this.http.post("http://localhost:8080/loginsecurity",data)
  }
  
addemp=(data:any)=>{
  return this.http.post("http://localhost:8080/addemp",data)
}

empdelete=(data:any)=>{
  return this.http.post("http://localhost:8080/delete",data)
}
viewemp=()=>{
  return this.http.get("http://localhost:8080/viewemp")
}
updateemp=(data:any)=>{
  return this.http.post("http://localhost:8080/update",data)
}
searchemp=(data:any)=>{
  return this.http.post("http://localhost:8080/search",data)
}
addsec=(data:any)=>{
  return this.http.post("http://localhost:8080/addsecurity",data)
}
viewsec=()=>{
  return this.http.get("http://localhost:8080/viewsecurity")
}
secdelete=(data:any)=>{
  return this.http.post("http://localhost:8080/deletesecurity",data)
}
searchsec=(data:any)=>{
  return this.http.post("http://localhost:8080/searchsecurity",data)
}
updatesec=(data:any)=>{
  return this.http.post("http://localhost:8080/updatesecurity",data)
}
empleave=(data:any)=>{
  return this.http.post("http://localhost:8080/addleave",data)
}
leavereq=()=>{
  return this.http.get("http://localhost:8080/leaverequests")
}
leavestatus=(data:any)=>{
  return this.http.post("http://localhost:8080/leaveStatus",data)
}

}
