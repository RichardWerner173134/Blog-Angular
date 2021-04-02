import { Component, OnInit } from '@angular/core';
import { IBeitragResponse } from 'src/app/model/beitrag-model';
import { AppstateService } from 'src/app/services/appstate.service';
import { BeitragService } from '../../services/beitrag.service';

@Component({
  selector: 'app-beitraege',
  templateUrl: './beitraege.component.html',
  styleUrls: ['./beitraege.component.css']
})
export class BeitraegeComponent implements OnInit {

  beitraege: IBeitragResponse[] = [];

  constructor(
    private appstateService: AppstateService) { }

  ngOnInit(): void {
    this.appstateService.getAppState().subscribe(
      data => {
        this.beitraege = data.beitraege;
      }
    );
  }
}


