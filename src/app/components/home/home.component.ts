import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppstateService } from 'src/app/services/appstate.service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated: boolean = false;

  constructor(
    private appstateService: AppstateService,
    private router: Router) {
  }

  ngOnInit(): void {
    let username = this.appstateService.getUsernameFromStore();
    let token = this.appstateService.getTokenFromStore();
    if(username == "" || token == ""){
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }
  }

}
