import { User } from './user.model';
import { Injectable } from '@angular/core';

@Injectable()
export class UserdataService {

  userData:User[]=[];

  constructor() { }

  getUserData(){
    return this.userData;
  }

  addUserData(item:any){
    this.userData.unshift(item);
  }

}
