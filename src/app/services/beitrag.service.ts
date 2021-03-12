import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BeitragInterface, BeitragModel } from '../model/beitrag-model';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BeitragService {

  constructor(private http: HttpClient,
    private loginService: LoginService) { }

  public addBeitrag(beitrag: BeitragModel): Observable<any> {

      const url: string = 'http://localhost:8080/addBeitrag'
      const headers = { 
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.loginService.getToken()
      }  

      return this.http.post<BeitragInterface>(
        url, 
        JSON.stringify(beitrag), 
        {"headers": headers}
      );
  }

  public getBeitraege(): Observable<BeitragInterface[]>{
    const url: string = 'http://localhost:8080/beitraege'
    
    return this.http.get<BeitragInterface[]>(
      url
    );
  }
}
