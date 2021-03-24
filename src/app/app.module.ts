import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/head/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ImpressumComponent } from './components/impressum/impressum.component';
import { BeitragComponent } from './components/beitraege/beitrag/beitrag.component';
import { HeaderItemComponent } from './components/shared/head/header-item/header-item.component';
import { BeitraegeComponent } from './components/beitraege/beitraege.component';
import { TodayComponent } from './components/impressum/today/today.component';
import { NewArticleComponent } from './components/home/new-article/new-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/shared/logout/logout.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthorenComponent } from './components/authoren/authoren.component';
import { MatTableModule } from '@angular/material/table';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { BeitragViewComponent } from './components/beitraege/beitrag-view/beitrag-view.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'beiträge', component: BeitraegeComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'autoren', component: AuthorenComponent },
  { path: 'beiträge/:beitragid', component: BeitragViewComponent },
  { path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderItemComponent,
    HomeComponent,
    BeitraegeComponent,
    ImpressumComponent,
    TodayComponent,
    BeitragComponent,
    NewArticleComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    AuthorenComponent,
    BeitragViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    NgxMatFileInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
