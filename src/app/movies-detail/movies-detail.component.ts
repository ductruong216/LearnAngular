import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Location } from '@angular/common'
@Component({
  selector: 'app-movies-detail',
  templateUrl: './movies-detail.component.html',
  styleUrls: ['./movies-detail.component.css']
})
export class MoviesDetailComponent implements OnInit {
  @Input() movie: Movie;
  constructor(private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getMovieFromRoute();
  }

  getMovieFromRoute() {
    let id = +this.route.snapshot.paramMap.get('id');
    console.log(`+this.route.snapshot.paramMap = ${JSON.stringify(this.route.snapshot.paramMap)}`);

    // Call service to "get movie from id"
    this.movieService.getMovieById(id).subscribe(movie => this.movie = movie);
  }

  goBack() {
    this.location.back();
  }

  save(movie: any) {
    this.movieService.updateMovie(movie).subscribe(() => this.goBack());
  }
}
