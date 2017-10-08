import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit() {
  }

  //this will check if canActivate authenticated or not if authenticated , navigate to search user 

  logIn(){
    this.authService.logIn();
    alert("you can access the search data")
    this.router.navigate(['/search']);

  }

  logOut(){
    this.authService.logOut();
    alert("you can not access the search data")
    


  }

}
