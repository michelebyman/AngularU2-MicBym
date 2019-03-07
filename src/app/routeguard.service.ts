import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RouteguardService implements CanActivate {

user: string;

constructor(private authService: AuthService, public router: Router) {

}



  canActivate(): boolean {
    this.user = this.authService.checkIfLoggedIn();
    if (this.user === null || this.user === undefined ) {
      this.router.navigate(['login']);
      return false;
    }
      return true;
    }
  }
