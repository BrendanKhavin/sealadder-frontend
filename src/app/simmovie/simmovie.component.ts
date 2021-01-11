import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MovieDbService } from '../movie-db.service';
import { IMovieDb } from '../movieDb.interface';

@Component({
  selector: 'app-simmovie',
  templateUrl: './simmovie.component.html',
  styleUrls: ['./simmovie.component.css']
})



export class SimmovieComponent implements OnInit {

  public movieID : any;
  movies = [] as any;
  movie = [] as any;

  constructor(private router: Router, private route: ActivatedRoute, private _movieDbService: MovieDbService) { }

  ngOnInit() {
    
    this.route.paramMap.subscribe(params => {
      this.movieID = params.get('movie.id');
      this._movieDbService.getMovie(this.movieID).subscribe(data => {
        data.poster_path = 'https://image.tmdb.org/t/p/w400/' + data.poster_path;
        this.movie = data;
      })
      this._movieDbService.getSimilarMovies(this.movieID).subscribe(data => {
        this.movies = [];
        for (var i = 0; i < 6; i++){
          data.results[i].poster_path = 'https://image.tmdb.org/t/p/w400/' + data.results[i].poster_path;
          this.movies.push(data.results[i]);
        } 
      })
    });
    
    console.log(this.movies);
  }  

  onSelect(movie : IMovieDb){
    this.router.navigate(['/similar-movies/', movie.id, movie.title]);
  }

  getEngTitle(oName : string, eName : string){ //Checks for difference between original and english names
    return oName == eName;
  }

}