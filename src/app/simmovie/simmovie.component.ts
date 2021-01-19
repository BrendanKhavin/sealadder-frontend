import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieDbService } from '../movie-db.service';
import { IMovieDb } from '../movieDb.interface';
import { faSmileBeam, faGrinSquintTears, faTired, faSadTear } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-simmovie',
  templateUrl: './simmovie.component.html',
  styleUrls: ['./simmovie.component.css']
})



export class SimmovieComponent implements OnInit {

  public movieID : any;
  movies = [] as any;
  movie = [] as any;

  faSmileBeam = faSmileBeam;
  faGrinSquintTears = faGrinSquintTears;
  faTired = faTired;
  faSadTear = faSadTear;

  constructor(private router: Router, private route: ActivatedRoute, private _movieDbService: MovieDbService) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.movieID = params.get('movie.id');
      this.movies = [];

      this._movieDbService.getMovie(this.movieID).subscribe(data => {

        data.poster_path = 'https://image.tmdb.org/t/p/w400/' + data.poster_path;
        this.getMovieDetails(this.movieID);
        this._movieDbService.setEmotions(data);
        this.movie = data;
  
        console.log(this.movie);
      
      this._movieDbService.getSimilarMovies(this.movieID).subscribe(sub => {

        console.log(this.movieID);

        for (var i = 0; i < 6; i++){

          console.log(sub.results[i]);
          sub.results[i].poster_path = 'https://image.tmdb.org/t/p/w400/' + sub.results[i].poster_path;
          this.getMoviesDetails(i, sub.results[i].id);
          this._movieDbService.setEmotions(sub.results[i]);
          this.movies.push(sub.results[i]);

        } 
      })
      })
    });

  }  

  getMovieDetails(movieID: string){
    this._movieDbService.getMovieDetails(movieID).subscribe(data => {
      this.movie.runtime = data.runtime;
      this.movie.status = data.status;
      this.movie.tagline = data.tagline;
    } )
  }

  getMoviesDetails(i : number, movieID: string){
    this._movieDbService.getMovieDetails(movieID).subscribe(data => {
      this.movies[i].runtime = data.runtime;
      this.movies[i].status = data.status;
      this.movies[i].tagline = data.tagline;
    } )
  }


  onSelect(movie : IMovieDb){
    this.router.navigate(['/similar-movies/', movie.id, movie.title]);
  }

  isEng(oName: string, eName: string){ //Checks for difference between original and english names
    return oName == eName;
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

}