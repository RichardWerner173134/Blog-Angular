import { HttpClient } from '@angular/common/http';
import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IBeitragCreation, BeitragModel, IBeitragResponse } from '../model/beitrag-model';
import { FetchAction } from '../store/actions';
import { IAppstate } from '../store/state';
import { AppstateService } from './appstate.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class BeitragService {

  private appstateService: AppstateService;

  constructor(
    private http: HttpClient){ }

    setAppStateService(appstateService: AppstateService) {
      this.appstateService = appstateService;
    }

  addView(beitragId: number) {
    let url = 'https://blog-rw.herokuapp.com/beitraege/' + beitragId + '/addView';
    let username: string = this.appstateService.getUsernameFromStore() != "" ? this.appstateService.getUsernameFromStore() : "not authenticated user";

    let body = {
      date: new Date(),
      user: username
    };
        
    this.http.post(
      url,
      body
    ).subscribe();  
  }

  public addBeitrag(beitrag: BeitragModel): Observable<any> {

    let token: string = this.appstateService.getTokenFromStore();

    const url: string = 'https://blog-rw.herokuapp.com/addBeitrag'
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }  

      
    return this.http.post<IBeitragCreation>(
      url, 
      JSON.stringify(beitrag), 
      {"headers": headers}
    );
    
  }

  public fetchBeitraege(): Observable<IBeitragResponse[]>{
    const url: string = 'https://blog-rw.herokuapp.com/beitraege';
    return this.http.get<IBeitragResponse[]>(
      url
    );
  }
}
