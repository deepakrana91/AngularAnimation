import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  loggedIn=false;

  constructor() { }

  isAuthenticated(){
    const promise= new Promise(
      (resolve,reject)=> {
        setTimeout(()=>{
          resolve(this.loggedIn)
        });
      }
    )

    return promise

  }

  logIn(){
    this.loggedIn=true;
  }

  logOut(){
    this.loggedIn=false;
  }

}
