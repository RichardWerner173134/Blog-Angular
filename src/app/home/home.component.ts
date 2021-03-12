import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authenticated: boolean = false;

  constructor(private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit(): void {
    if(this.loginService.getToken() == null || this.loginService.getToken() == undefined){
      this.authenticated = false;
    } else {
      this.authenticated = true;
    }
  }

}
