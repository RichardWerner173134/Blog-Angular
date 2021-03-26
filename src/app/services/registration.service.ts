import { HttpClient } from '@angular/common/http';
import { Byte } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  public register(username: string, password: string, firstName: string, secondName: string, img: File): Observable<any> {
    let url = 'https://blog-rw.herokuapp.com/register';
    let formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);
    formData.append("vorname", firstName);
    formData.append("nachname", secondName);
    formData.append("profilbild", img);
    
    return this.http.post(url, formData);
  }

}
