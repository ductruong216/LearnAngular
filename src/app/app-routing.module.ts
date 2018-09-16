import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { MoviesComponent } from './movies/movies.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesDetailComponent } from './movies-detail/movies-detail.component';

const routes: Routes = [
  { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
  { path: "movie", component: MoviesComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: 'detail/:id', component: MoviesDetailComponent }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
