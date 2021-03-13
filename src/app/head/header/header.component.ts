import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  authenticated: boolean;

  items: any[] = [
    'Home',
    'Beiträge',
    'Impressum'
  ];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.authenticated = this.isLoggedIn();
  }

  isLoggedIn(): boolean{
    return this.loginService.getToken() !== "" && this.loginService.getToken() !== undefined;
  }

}
