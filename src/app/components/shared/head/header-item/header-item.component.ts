import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.css']
})
export class HeaderItemComponent implements OnInit {

  @Input()
  value: string;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  route(): void{
    this.router.navigate(
      [this.value.toLowerCase()]
    );
  }

}
