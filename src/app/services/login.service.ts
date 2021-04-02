import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginAction, LogoutAction } from '../store/actions';
import { IAppstate } from '../store/state';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private store: Store< { appState: IAppstate } >
    ) { }

  public authenticate(username: string, password: string): Observable<string>{
    let url = "https://blog-rw.herokuapp.com/authenticate";

    let body = {
      username: username,
      password: password
    };

    return this.http.post<string>(url, body);
  }

  public logout() {
    this.store.dispatch(LogoutAction());
  }

  public login(user: string, token: string){
    this.store.dispatch(LoginAction({
      payload: {
        user: user,
        token: token
      }
    }));
  }

}
