import { ServerService } from './../server.service';
import { UserdataService } from './../shared/userdata.service';
import { User } from './../shared/user.model';
import { GenderarrayService } from './../shared/genderarray.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  genderArray = [];
  defaultPrefix='Mr'
  userData:any[]=[];

  constructor(private genderarrayService:GenderarrayService,
              private userdataService:UserdataService,
              private serverService:ServerService) { }

  ngOnInit() {

    this.genderArray=this.genderarrayService.title;
  }

  onSubmit(form:NgForm){

    const user =  {
      firstname:form.value.fname,
      lastname:form.value.lname,
      email:form.value.email,
      date:form.value.date,
      Prefix:form.value.prefix,

    }

    this.userdataService.addUserData(user);
    form.reset();

  }

  onSave(){
    this.userData= this.userdataService.getUserData();

    this.serverService.setdata(this.userData)
    .subscribe(
      (response)=> console.log(response),
      (error)=>console.log(error)
    );

  }
}
