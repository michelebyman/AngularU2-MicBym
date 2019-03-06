import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = "";
  user: string;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // calls the function
    this.checkUser();
  }

    //when someone press the login button and calls the service funtion- login() with the parameter username
    login():void {
          this.authService.login(this.username)
    }

    //when someone press the logout button and calls the service funtion- logout() with the parameter and calls the checkUser
    logout():void {
      this.authService.logout()
      this.checkUser();
    }

    //checks if there is a user or not stored in the local storage or not
    checkUser():void{
      this.user = this.authService.checkIfLoggedIn();
    }
  }
