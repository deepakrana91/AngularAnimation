import { UserdataService } from './shared/userdata.service';
import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/Rx'

@Injectable()
export class ServerService {

    constructor(private http:Http, private userDataService:UserdataService){}

    setdata(data:any[]){
       return this.http.put('https://http-ng-angular.firebaseio.com/data.json',data);
    }

    getdata(){

        return this.http.get('https://http-ng-angular.firebaseio.com/data.json')
        .map(
            (response:Response)=>{
                const data = response.json();
                return data;
            }
        )
    }

    deleteData(id:number){
      console.log(`id is ${id}`);
      return this.http.delete(`https://http-ng-angular.firebaseio.com/data/${id-1}.json`);
    }



    

}