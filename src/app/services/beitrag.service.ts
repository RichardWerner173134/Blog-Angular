import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBeitragCreation, BeitragModel, IBeitragResponse } from '../model/beitrag-model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BeitragService {

  constructor(private http: HttpClient,
    private loginService: LoginService) { }

  addView(beitragId: number) {
    let url = 'https://blog-rw.herokuapp.com/beitraege' + beitragId + '/addView';
    let user = this.loginService.getUsername() !== null && this.loginService.getUsername() !== undefined ? this.loginService.getUsername() : "not authenticated user";

    let body = {
      date: new Date(),
      user: user
    };

    this.http.post(
      url,
      body
    ).subscribe();  
  }

  public addBeitrag(beitrag: BeitragModel): Observable<any> {

      const url: string = 'https://blog-rw.herokuapp.com/addBeitrag'
      const headers = { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.loginService.getToken()
      }  

      return this.http.post<IBeitragCreation>(
        url, 
        JSON.stringify(beitrag), 
        {"headers": headers}
      );
  }

  public getBeitraege(): Observable<IBeitragResponse[]>{
    const url: string = 'https://blog-rw.herokuapp.com/beitraege'
    
    return this.http.get<IBeitragResponse[]>(
      url
    );
  }
}
