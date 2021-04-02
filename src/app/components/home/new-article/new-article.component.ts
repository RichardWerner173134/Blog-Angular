import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { BeitragModel } from 'src/app/model/beitrag-model';
import { AppstateService } from 'src/app/services/appstate.service';
import { BeitragService } from 'src/app/services/beitrag.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-new-article',
  templateUrl: './new-article.component.html',
  styleUrls: ['./new-article.component.css']
})
export class NewArticleComponent implements OnInit {

  username: string;

  beitrag = new FormGroup({
    title: new FormControl(''),
    author: new FormControl(''),
    content: new FormControl('')
  });

  constructor(
    private appstateService: AppstateService,
    private beitragService: BeitragService,
    private snackbar: MatSnackBar,
    private router: Router) { }

  ngOnInit(): void {
    this.appstateService.getAppState().subscribe(
      data => {
        this.username = data.user;
      }
    );
    document.getElementById("form").style.minWidth=(window.innerWidth * 0.8).toString() + "px";
    this.beitrag.controls['author'].setValue(this.username);
    this.beitrag.controls['author'].disable();
  }

  public submit(){
    let submitTitle = this.beitrag.value.title;
    let submitAuthor = this.username;
    let submitContent = this.beitrag.value.content;

    let submitBeitrag: BeitragModel = new BeitragModel(submitTitle, submitAuthor, submitContent);


    this.beitragService.addBeitrag(submitBeitrag).subscribe(
      response => {
        let snackbarRef = this.snackbar.open("Beitrag gepostet", "OK", {
          duration: 20000
        });
        snackbarRef.afterDismissed().subscribe(
          () => {
            this.router.navigate(
              ['/beiträge']
            );
          }
        );
      },
      error => {
        console.log(error);
      }
    );
  }
}
