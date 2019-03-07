import { Injectable } from '@angular/core';
 // handle loging service and logout service
@Injectable({
  providedIn: 'root'
})

  export class AuthService {

  loggedUser:string;
  constructor() {
  }
  checkIfLoggedIn(){
    return localStorage.getItem('user');
  }
  public login(user:string){
    localStorage.setItem('user', user);
    this.loggedUser = user;
  }


  public logout(){
    localStorage.clear();
    this.loggedUser = undefined;
  }

}
