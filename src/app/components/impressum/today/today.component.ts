import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {

  date: Date;

  constructor() { }

  ngOnInit(): void {
    this.date = new Date();
  }

}
