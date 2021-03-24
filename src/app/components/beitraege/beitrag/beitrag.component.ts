import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IBeitragResponse } from 'src/app/model/beitrag-model';

@Component({
  selector: 'app-beitrag',
  templateUrl: './beitrag.component.html',
  styleUrls: ['./beitrag.component.css']
})
export class BeitragComponent implements OnInit {

  @Input()
  beitrag: IBeitragResponse;

  constructor(private router: Router) {
  }

  ngOnInit(): void {}

}
