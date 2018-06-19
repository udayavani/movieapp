import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { environment } from './../environments/environment';



@Injectable()
export class MovieService {

  constructor(private http: HttpClient) {
  }

  // API: GET /getNowPlayingMovies
  public getNowPlayingMovies() {
    // will use this.http.get()
    return this.http.get(environment.movieApiBaseUrl + 'now_playing?api_key=e43d2d94b9a5b038b170a02ac2c9411e&language=en-US&page=4')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  public getUpcomingMovies() {
    // will use this.http.get()
    return this.http.get(environment.movieApiBaseUrl + 'upcoming?api_key=e43d2d94b9a5b038b170a02ac2c9411e&language=en-US&page=4')
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }


  public getMovieDetails(id) {
    // will use this.http.get()
    const url = environment.movieApiBaseUrl + id + '?api_key=e43d2d94b9a5b038b170a02ac2c9411e&language=en-US';
    return this.http.get(url)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(
      'Something bad happened; please try again later.');
  }
}
