import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieDbService } from '../movie-db.service';
import { IMovieDb } from '../movieDb.interface';
import { IMoviesDb} from '../movieDb.interface';
import { Router } from '@angular/router';
import { faSmileBeam, faGrinSquintTears, faTired, faSadTear} from '@fortawesome/free-regular-svg-icons';
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit {

  constructor(private _movieDbService: MovieDbService, private router: Router) {   }

  movies = [] as any;
  moviesC = [] as any; // Constant Movies
  movieID : string = '';
  faSmileBeam = faSmileBeam;
  faGrinSquintTears = faGrinSquintTears;
  faTired = faTired;
  faSadTear = faSadTear;
  faUndoAlt = faUndoAlt;


  ngOnInit() {
    this.movies = [];
    this._movieDbService.getMovies().subscribe(data => {
      for (var i = 0; i < data.results.length; i++){
        data.results[i].poster_path = 'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path;
        this.getMovieDetails(i , data.results[i].id);
        this._movieDbService.setEmotions(data.results[i]);
        this.movies.push(data.results[i]);
      }
    }
  )
  this.moviesC = this.movies;
}   

  getMovieDetails(count : number, movieID: string){
    this._movieDbService.getMovieDetails(movieID).subscribe(data => {
      this.movies[count].runtime = data.runtime;
      this.movies[count].status = data.status;
      this.movies[count].tagline = data.tagline;
    } )
  }



  isEng(oName: string, eName: string){ //Checks for difference between original and english names
    return oName == eName;
  }

  onSelect(movie : IMovieDb){
    this.router.navigate(['/similar-movies', movie.id, movie.title]);
  }

  filterEmotion(eID : number){
    var keys = Object.keys(localStorage);
    let filtMovies = [] as any;
    var btn = document.getElementById(eID + "Btn");
    
    this.movies.forEach((movie: any) => {
      let temp : string = movie.id + '-' + eID;
      if (localStorage.getItem(temp) == '1'){
        filtMovies.push(movie);
      }
      });
  
      this.movies = filtMovies;
  }

  incrementEmotion(movie : IMovieDb, eID: number){

    if (localStorage.getItem(movie.id + '-' + eID) == '1') { 
      localStorage.setItem(movie.id + '-' + eID, JSON.stringify(movie.movieEmotion[eID][1] = 0));
    } else {   
      localStorage.setItem(movie.id + '-' + eID, JSON.stringify(movie.movieEmotion[eID][1] = 1)); 
    }
  
    console.log(localStorage.getItem(movie.id + '-' + eID));
  }

  getEmotion(movie: IMovieDb, eID: number){
    if (localStorage.getItem(movie.id + '-' + eID)){ return localStorage.getItem(movie.id + '-' + eID);
   } else { return 0; }
  }

  onDelete(movie: IMovieDb){
    if (window.confirm("Are you sure you want to delete: (" + movie.title + ") from the list of movies?" )) {
      this.movies.splice(this.movies.indexOf(movie),1);
    }
  }

  resetBtn(){
    this.movies = this.moviesC;
  }

}