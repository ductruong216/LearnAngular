import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  movies: Movie[];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovie();
  }

  getMovie() {
    this.movieService.getMovies().subscribe(updateMovie => this.movies=updateMovie.slice(1,5));
  }

}
