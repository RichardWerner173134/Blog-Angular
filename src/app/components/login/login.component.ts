import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppstate } from 'src/app/store/state';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = new FormGroup({
    username : new FormControl(''),
    password : new FormControl('')
  });

  constructor(
    private store: Store<{appState: IAppstate}>,
    private loginService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submit(): void{
    let username = this.login.value.username;
    let password = this.login.value.password;

    this.loginService
      .authenticate(username, password)
      .subscribe(
        response => {
          this.loginService.login(username, response);
          this.router.navigate(
            ['/home']
          );
        },
        error => {
          console.log(error);
        }
      );
  }

}
