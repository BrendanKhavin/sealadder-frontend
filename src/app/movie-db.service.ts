import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMoviesDb } from './movieDb.interface';
import { IMovieDb } from './movieDb.interface';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDbService {

  private _url: string = 'https://api.themoviedb.org/3/discover/movie?api_key=d32c6f01f6fd749822fd5c0c6aaec77b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false';
  private _APIKey : string = 'd32c6f01f6fd749822fd5c0c6aaec77b'

  constructor(private http: HttpClient) { }

  getMovies(): Observable<IMoviesDb>{
    return this.http.get<IMoviesDb>(this._url)
  }

  getMovieDetails(movieId : string){
    return this.http.get<IMovieDb>('https://api.themoviedb.org/3/movie/' + movieId + '?api_key=' + this._APIKey);
  }

  getSimilarMovies(movieID : string): Observable<IMoviesDb>{
   let temp : string = 'https://api.themoviedb.org/3/movie/' + movieID + '/similar?api_key=' + this._APIKey;
    return this.http.get<IMoviesDb>(temp);
  }

  setEmotions(movie : IMovieDb){
    movie.movieEmotion = [['Happy',  0 ] , ['Funny', 0] , ['Scary', 0], ['Sad', 0]];
  }

  getEmotions(id : string, eID: number){
    let temp : string = id + '-' + JSON.stringify(eID);
    let i = localStorage.getItem(temp);
  }

  getMovie(movieID : string): Observable<IMovieDb>{
    let temp : string = 'https://api.themoviedb.org/3/movie/' + movieID + '?api_key=' + this._APIKey;
    return this.http.get<IMovieDb>(temp);
  }

}