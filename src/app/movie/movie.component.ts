import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MovieDbService } from '../movie-db.service';
import { IMovieDb } from '../movieDb.interface';
import { IMoviesDb} from '../movieDb.interface';
import { Router } from '@angular/router';



@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit {
  movies = [] as any;


  constructor(private _movieDbService: MovieDbService, private router: Router) {   }

  ngOnInit() {
    this._movieDbService.getMovies().subscribe(data => {
      for (var i = 0; i < data.results.length; i++){
        data.results[i].poster_path = 'https://image.tmdb.org/t/p/w400/' + data.results[i].poster_path;
        this.movies.push(data.results[i]);
      }
    })
  }

  getEngTitle(oName : string, eName : string){ //Checks for difference between original and english names
    return oName == eName;
  }

  onSelect(movie : IMovieDb){
    this.router.navigate(['/similar-movies', movie.id, movie.title]);
  }
  
}

/*
  Similar Movie Works
  Add Layout
*/