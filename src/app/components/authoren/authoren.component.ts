import { Component, OnInit } from '@angular/core';
import { AuthorModel } from '../../model/author-model';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-authoren',
  templateUrl: './authoren.component.html',
  styleUrls: ['./authoren.component.css']
})
export class AuthorenComponent implements OnInit {
  
  displayedColumns = [
    'Username', 
    'Vorname', 
    'Nachname'
  ];

  authorList: AuthorModel[];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe(
      response => {
        this.authorList = response;
      },
      error => {
        console.log(error);
      }
    );
  }

}
