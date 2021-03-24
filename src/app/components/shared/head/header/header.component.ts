import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: string;

  authenticated: boolean;

  items: any[] = [
    'Home',
    'Beiträge',
    'Impressum',
    'Autoren'
  ];

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
    this.authenticated = this.isLoggedIn();
    if(this.authenticated){
      this.url = 'http://localhost:8080/users/' + this.loginService.getUsername() + '/img';
    }
  }

  isLoggedIn(): boolean{
    return this.loginService.getToken() != null;
  }

}
