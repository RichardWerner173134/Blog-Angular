import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public register(username: string, password: string, firstName: string, secondName: string): Observable<any> {
    let url = 'http://localhost:8080/register';
    let body = {
      username: username,
      password: password,
      vorname: firstName,
      nachname: secondName
    };

    return this.http.post(url, body);
  }

}
