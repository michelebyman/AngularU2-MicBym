import { Component, OnInit } from '@angular/core';
import { RouteguardService } from '../routeguard.service';
  // showes the navbar
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(public routeGuard: RouteguardService) { }

  ngOnInit() {
  }
}
