import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IBeitragResponse } from 'src/app/model/beitrag-model';
import { BeitragService } from 'src/app/services/beitrag.service';

@Component({
  selector: 'app-beitrag-view',
  templateUrl: './beitrag-view.component.html',
  styleUrls: ['./beitrag-view.component.css']
})
export class BeitragViewComponent implements OnInit {
  public beitrag: IBeitragResponse = {
    id:null, 
    title: null, 
    author: null, 
    content: null, 
    views: null
  };

  constructor(    
    private route: ActivatedRoute,
    private beitragService: BeitragService
  ) { }

  ngOnInit(): void {
    let beitragId = Number(this.route.snapshot.paramMap.get('beitragid'));
    this.beitragService.getBeitraege().subscribe(
      response => {
        this.beitrag = response.find(b => b.id == beitragId);
      },
      error => {
        console.log(error);
      }
    );

    this.beitragService.addView(beitragId);
  }

}
