import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieDbService } from '../movie-db.service';
import { IMovieDb } from '../movieDb.interface';
import { IMoviesDb} from '../movieDb.interface';
import { Router } from '@angular/router';
import { faSmileBeam, faGrinSquintTears, faTired, faSadTear } from '@fortawesome/free-regular-svg-icons';




@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit {

  constructor(private _movieDbService: MovieDbService, private router: Router) {   }

  movies = [] as any;
  movieID : string = '';
  faSmileBeam = faSmileBeam;
  faGrinSquintTears = faGrinSquintTears;
  faTired = faTired;
  faSadTear = faSadTear;



  ngOnInit() {
    this.movies = [];
    this._movieDbService.getMovies().subscribe(data => {
      for (var i = 0; i < data.results.length; i++){
        data.results[i].poster_path = 'https://image.tmdb.org/t/p/w500/' + data.results[i].poster_path;
        this.getMovieDetails(i , data.results[i].id);
        this.movies.push(data.results[i]);
        console.log(data.results[i]);
      }
    }
  )
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
  
}