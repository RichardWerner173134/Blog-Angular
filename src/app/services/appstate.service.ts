import { Injectable } from '@angular/core';
import { State, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FetchAction } from '../store/actions';
import { IAppstate } from '../store/state';
import { BeitragService } from './beitrag.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppstateService {

  private initFetch: boolean = true;
  private lastUpdate: Date;

  constructor(
    private beitragService: BeitragService,
    private store: Store<{ appState: IAppstate }>) {
      this.beitragService.setAppStateService(this);
    }

  public getAppState(): Observable<IAppstate> {

    if(this.initFetch){
      this.beitragService.fetchBeitraege().subscribe(
        data => {
          this.store.dispatch(FetchAction({
            payload: {
              beitraege: data
            }
          }));
        }
      );
      this.initFetch = false;
      this.lastUpdate = new Date();
      return this.store.select('appState');
    }

    let now = new Date();
    let timeDiff = Math.floor((now.getTime() - this.lastUpdate.getTime()) / 1000);

    if(timeDiff > 10){
      this.beitragService.fetchBeitraege().subscribe(
        data => {
          this.store.dispatch(FetchAction({
            payload: {
              beitraege: data
            }
          }));
        }
      );
      this.lastUpdate = now;
    }

    return this.store.select('appState');

  }

  getUsernameFromStore(): string {
    let username: string;
    this.store.select('appState').subscribe(
      data => {
        username = data.user;
      }
    )
    return username;
  }

  getTokenFromStore(): string {
    let token: string;
    this.store.select('appState').subscribe(
      data => {
        token = data.token;
      }
    )
    return token;
  }

}


