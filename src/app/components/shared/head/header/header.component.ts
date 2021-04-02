import { Component, OnInit } from '@angular/core';
import { AppstateService } from 'src/app/services/appstate.service';
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

  constructor(
    private appstateService: AppstateService,
    private loginService: LoginService) { }

  ngOnInit(): void {
    this.appstateService.getAppState().subscribe(
      data => {
        if(data.user != "" && data.token != ""){
          this.authenticated = true;
          this.url = 'https://blog-rw.herokuapp.com/users/' + data.user + '/img';
        } else {
          this.authenticated = false;
        }
      }
    );
  }

}
