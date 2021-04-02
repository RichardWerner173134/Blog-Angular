import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IBeitragResponse } from '../model/beitrag-model';
import { AppstateService } from '../services/appstate.service';
import { BeitragService } from '../services/beitrag.service';
import { FetchAction } from '../store/actions';
import { IAppstate } from '../store/state';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  beitraege: any[];
  user: string;

  constructor(
    private appstateService: AppstateService,
    private store: Store< { appState: IAppstate } >) { }

  ngOnInit(): void {
    this.store.select('appState').subscribe(
      data => {
        this.beitraege = data.beitraege;
      }
    );

    this.store.select('appState').subscribe(
      data => {
        this.user = data.user;
      }
    );
  }
  

  testBeitraege(){
    this.appstateService.getAppState().subscribe(
      data => {
        this.beitraege = data.beitraege;
      }
    );
  }

}
