import { Router } from '@angular/router';
import { ServerService } from './../server.service';
import { User } from './../shared/user.model';
import { UserdataService } from './../shared/userdata.service';
import { Component, OnInit, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-search-data',
  templateUrl: './search-data.component.html',
  styleUrls: ['./search-data.component.css'],
  // using the angular animation
  animations: [
    trigger('userState',
      [
        state('active', style({
          backgroundColor: '#cfd8dc',
          transform: 'scale(1.1)'
        })),
        state('inactive', style({
          backgroundColor: '#fff',
          transform: 'scale(1)'
        })),
        transition('inactive => active', animate('500ms ease-in')),
        transition('active => inactive', animate('500ms ease-out'))
      ]
    ),
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(0)'})),
      transition('void => *', [
        animate(400, keyframes([
          style({opacity: 0, transform: 'translateX(-100%)', offset: 0}),
          style({opacity: 1, transform: 'translateX(15px)',  offset: 0.3}),
          style({opacity: 1, transform: 'translateX(0)',     offset: 1.0})
        ]))
      ]),
      transition('* => void', [
        animate(400, keyframes([
          style({opacity: 1, transform: 'translateX(0)',     offset: 0}),
          style({opacity: 1, transform: 'translateX(-15px)', offset: 0.7}),
          style({opacity: 0, transform: 'translateX(100%)',  offset: 1.0})
        ]))
      ])
    ])]
})
export class SearchDataComponent implements OnInit {

  userDataArray:User[]=[];
  filterName='';
  stateExpression: string;
  id:number;

  constructor(private userdataService:UserdataService,private serverService:ServerService,
              private router:Router) { }

  ngOnInit() {

    // this.userDataArray= this.userdataService.getUserData();
    // Directly fetching the data from the server.
    this.serverService.getdata()
    .subscribe(
      (userData:any[])=> {
        if(userData){
          console.log(userData);
          this.userDataArray=userData;
          this.id= this.userDataArray.length;
        } else

        alert("no user data is saved")
        
      }
    )


  }

// this onDelete()function will delete the oldest user
// using the http delete function from the database and then navigate to the user page.

  onDelete(){
    this.serverService.deleteData(this.id).subscribe(
      (response)=> console.log(response)
    );
    this.router.navigate(['/users'])

  }

  mouseEnter() {
    this.activeState();
  };

  mouseLeave() {
    this.inactiveState();
  };

  inactiveState() { this.stateExpression = 'inactive'; }
  activeState() { this.stateExpression = 'active'; }

  animationStarted(state) {
    console.log('Animation Started', state)
  }

  animationDone(state) {
    console.log('Animation Done', state)
  }



}
