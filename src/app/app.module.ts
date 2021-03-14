import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { HomeComponent } from './home/home.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { BeitragComponent } from './beitraege/beitrag/beitrag.component';
import { HeaderItemComponent } from './head/header-item/header-item.component';
import { BeitraegeComponent } from './beitraege/beitraege.component';
import { TodayComponent } from './impressum/today/today.component';
import { NewArticleComponent } from './home/new-article/new-article.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent } from './register/register.component';
import { AuthorenComponent } from './authoren/authoren.component';
import { MatTableModule } from '@angular/material/table';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'beiträge', component: BeitraegeComponent},
  { path: 'impressum', component: ImpressumComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'autoren', component: AuthorenComponent },
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
    AuthorenComponent
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
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
