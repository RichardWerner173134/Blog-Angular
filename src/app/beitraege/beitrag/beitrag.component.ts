import { Component, Input, OnInit } from '@angular/core';
import { BeitragModel } from 'src/app/model/beitrag-model';

@Component({
  selector: 'app-beitrag',
  templateUrl: './beitrag.component.html',
  styleUrls: ['./beitrag.component.css']
})
export class BeitragComponent implements OnInit {

  @Input()
  beitrag: BeitragModel;

  constructor() {
  }

  ngOnInit(): void {}

}
