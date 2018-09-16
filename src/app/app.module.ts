import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule } from '@angular/forms';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';
import { MessageComponent } from './message/message.component';
import { MovieService } from './movie.service';
import { MessageService } from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { SearchComponent } from './search/search.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviesDetailComponent,
    MessageComponent,
    DashboardComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MovieService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
