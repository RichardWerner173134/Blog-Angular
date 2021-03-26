import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private token: string;
  private username: string;

  constructor(private http: HttpClient) { }

  public authenticate(username: string, password: string): Observable<string>{
    let url = "https://blog-rw.herokuapp.com/authenticate";

    let body = {
      username: username,
      password: password
    };

    return this.http.post<string>(url, body);
  }

  public setToken(token: string) {
    this.token = token;
  }

  public getToken(): string {
    return this.token;
  }

  public getUsername(): string {
    return this.username;
  }

  public setUsername(username: string) {
    this.username = username;
  }

  public logout() {
    this.token = null;
    this.username = null;
  }

}
