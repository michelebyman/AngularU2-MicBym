import { Injectable } from '@angular/core';
 // handle loging service and logout service
@Injectable({
  providedIn: 'root'
})

  export class AuthService {

  loggedUser:string;

  constructor() {
  }
  // checks if there is a user in local storage
  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }
  // gets a parameter from the input field and store ut in local storage
  public login(user:string){
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }

 // clear local storage 
  public logout(){
    localStorage.clear();
    this.loggedUser = undefined;
  }

}
