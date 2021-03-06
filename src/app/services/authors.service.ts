import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorModel } from '../model/author-model';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  public getAuthors(): Observable<AuthorModel[]>{
    let url = 'https://blog-rw.herokuapp.com/users';
    return this.http.get<AuthorModel[]>(url);
  }
}
