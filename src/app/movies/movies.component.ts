import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
// import { MOVIES } from '../constants/movies.constant';
import { MovieService } from '../movie.service';
import { tap } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  constructor(private movieSerice: MovieService) { }

  ngOnInit() {
    this.getMoviesFromService();
  }

  getMoviesFromService(): void {
    this.movieSerice.getMovies().subscribe(updateMovies => this.movies = updateMovies)
  }

  add(name: string, year: number) {
    name = name.trim();
    if (Number.isNaN(Number(year)) || !name || Number(year) === 0) {
      alert('Name must not blank and year is only number');
      return;
    }
    const newMovie = new Movie();
    newMovie.name = name;
    newMovie.releaseYear = Number(year);
    this.movieSerice.add(newMovie).subscribe(addMovie => { this.movies.push(addMovie) });
  }

  delete(movieId: number) {
    this.movieSerice.delete(movieId).subscribe(_ => {
      this.movies = this.movies.filter(eachMovie => eachMovie.id !== movieId);
    });
  }
  // selectedMovie: Movie;
  // onSelected(movie: Movie): void {
  //   this.selectedMovie = movie;
  //   console.log(`Selected Movie = ${JSON.stringify(this.selectedMovie)}`);
  // }
}
