import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMoviesDb } from './movieDb.interface';
import { IMovieDb } from './movieDb.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  private _url: string = 'https://api.themoviedb.org/3/discover/movie?api_key=d32c6f01f6fd749822fd5c0c6aaec77b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMoviesDb>{
    return this.http.get<IMoviesDb>(this._url)
  }


}
