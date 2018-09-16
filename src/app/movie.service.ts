import { Injectable } from '@angular/core';
// import { MOVIES } from './constants/movies.constant';
import { Observable, of } from '../../node_modules/rxjs';
import { Movie } from '../models/movie';
import { MessageService } from './message.service';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TagPlaceholder } from '../../node_modules/@angular/compiler/src/i18n/i18n_ast';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseURL = 'http://localhost:3000/'
  // getMovies(): Observable<Movie[]> {
  //   // this.messageService.add(`${new Date().toLocaleString()}. Get movie list`);
  //   // return of(MOVIES);
  //   return this.http.get
  // }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseURL + "movies").pipe(
      tap(receiverMovie => console.log(`Receive Movie:  ${JSON.stringify(receiverMovie)}`)),
      catchError(error => of([]))
    );
    //
  }

  getMovieById(id: number): Observable<Movie> {
    //  return of(MOVIES.find(movie => movie.ID === id));
    const url = `${this.baseURL}movies/${id}`;
    return this.http.get<Movie>(url).pipe(
      tap(selectedMovie => console.log(`Selected Movie:  ${JSON.stringify(selectedMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  updateMovie(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.baseURL}movies/${movie.id}`, movie, httpOptions).pipe(
      tap(uploadMovie => console.log(`Update Movie:  ${JSON.stringify(uploadMovie)}`)),
      catchError(error => of(new Movie()))
    );
  }

  add(newMovie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${this.baseURL}movies`, newMovie, httpOptions).pipe(
      tap(addMovie => console.log(`Add Movie:  ${JSON.stringify(newMovie)}`)),
      catchError(error => of(new Movie())))
  };

  delete(movieId: number): Observable<Movie> {
    return this.http.delete<Movie>(`${this.baseURL}movies/${movieId}`, httpOptions).pipe(
      tap(deleteMovie => console.log(`Delete Movie with Movie:  ${JSON.stringify(deleteMovie)}`)),
      catchError(error => of(new Movie()))
    );


  }

  search(typeString: string): Observable<Movie[]>{
     if(!typeString.trim()){
       return of([]);
     }
     return this.http.get<Movie[]>(`${this.baseURL}movies?name_like=${typeString}`).pipe(
       tap(foundMovies=> console.log(`Delete Movie with Movie:  ${JSON.stringify(foundMovies)}`)),
       catchError(error => of(null))
     );
  }
  
  constructor(private http: HttpClient,
    public messageService: MessageService,
  ) { }
}
