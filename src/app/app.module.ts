import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './head/header/header.component';
import { HeaderItemComponent } from './head/header-item/header-item.component';
import { HomeComponent } from './home/home.component';
import { BeitraegeComponent } from './beitraege/beitraege.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { TodayComponent } from './impressum/today/today.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'beiträge', component: BeitraegeComponent},
  { path: 'impressum', component: ImpressumComponent},
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
    TodayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
