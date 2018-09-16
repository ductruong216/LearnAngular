import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from '../../../node_modules/rxjs';
import { Movie } from '../../models/movie';
import { MovieService } from '../movie.service';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from '../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  movies$: Observable<Movie[]>;
  private searchSubject = new Subject<string>();

  constructor(private movieService: MovieService) { }

  
  ngOnInit() {
    this.movies$= this.searchSubject.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((typeString: string)=> this.movieService.search(typeString))
    );
  }

  search(typeString:string){
    this.searchSubject.next(typeString);
  }
}
