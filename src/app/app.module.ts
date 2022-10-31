import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { RouterModule, Routes } from '@angular/router';
import { AllLoginComponent } from './all-login/all-login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { SecurityLoginComponent } from './security-login/security-login.component';
import { EmpHomeComponent } from './emp-home/emp-home.component';
import { SecurityHomeComponent } from './security-home/security-home.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { TestingComponentComponent } from './testing-component/testing-component.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewempComponent } from './viewemp/viewemp.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddSecComponent } from './add-sec/add-sec.component';
import { ViewsecComponent } from './viewsec/viewsec.component';
import { SearchSecComponent } from './search-sec/search-sec.component';
import { EmpNavbarComponent } from './emp-navbar/emp-navbar.component';
import { EmpApplyleaveComponent } from './emp-applyleave/emp-applyleave.component';
import { LeaveApproveComponent } from './leave-approve/leave-approve.component';
import { ViewEmpleaveComponent } from './view-empleave/view-empleave.component'

const app:Routes=[
  {
    path:"adminlogin",component:AdminloginComponent
  },
  {
    path:"",component:AdminloginComponent
  },
  {
    path:"securitylogin",component:SecurityLoginComponent
  },
  {
    path:"employeelogin",component:EmpLoginComponent
  },
  {
    path:"emphome",component:EmpHomeComponent
  },
  {
    path:"securityhome",component:SecurityHomeComponent
  },
  {
    path:"adminhome",component:AdminHomeComponent
  },
  {
    path:"test",component:TestingComponentComponent
  },
  {
    path:"addemp",component:AddEmployeeComponent
  },
  {
    path:"viewemp",component:ViewempComponent
  },
  {
    path:"searchemp",component:SearchEmployeeComponent
  },
  {
    path:"addsec",component:AddSecComponent
  },
  {
    path:"viewsec",component:ViewsecComponent
  },
  {
    path:"searchsec",component:SearchSecComponent
  },
  {
    path:"empleave",component:EmpApplyleaveComponent
  },
  {
    path:"leaveapprove",component:LeaveApproveComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AdminloginComponent,
    AllLoginComponent,
    AdminHomeComponent,
    EmpLoginComponent,
    SecurityLoginComponent,
    EmpHomeComponent,
    SecurityHomeComponent,
    AdminNavbarComponent,
    TestingComponentComponent,
    AddEmployeeComponent,
    ViewempComponent,
    SearchEmployeeComponent,
    AddSecComponent,
    ViewsecComponent,
    SearchSecComponent,
    EmpNavbarComponent,
    EmpApplyleaveComponent,
    LeaveApproveComponent,
    ViewEmpleaveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(app),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
