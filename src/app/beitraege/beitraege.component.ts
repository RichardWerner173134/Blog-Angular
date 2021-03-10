import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BeitragInterface, BeitragModel } from '../model/beitrag-model';
import { BeitragService } from '../services/beitrag.service';

@Component({
  selector: 'app-beitraege',
  templateUrl: './beitraege.component.html',
  styleUrls: ['./beitraege.component.css']
})
export class BeitraegeComponent implements OnInit {

  beitraege: BeitragModel[] = [];

  constructor(private beitragService: BeitragService) { }

  ngOnInit(): void {
    this.beitragService.getBeitraege().subscribe(
      response => {
        this.beitraege = response;
      }
    );
  }
}
