import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movie } from './movie.model';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { observable } from 'rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit {
  movies: Movie[] = [];
  simMovies: Movie[] = [];
  private const movieDbURL : string = "https://api.themoviedb.org/3/discover/movie?api_key=d32c6f01f6fd749822fd5c0c6aaec77b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false";


  constructor(private http: HttpClient) {   }

  ngOnInit(): void { // Gets Science Fiction Films and stores them in an array of Movies
    this.http.get(this.movieDbURL).subscribe(data => {
      for (var i = 0; i < 50; i++){
        let temp : Movie = [data.results[i].id, data.results[i].original_title, data.results[i].overview, 'https://image.tmdb.org/t/p/w400/' + data.results[i].poster_path, data.results[i].title, data.results[i].release_date];
        temp[5] = temp[5].substr(0,4); //Remove date except year
        this.movies.push(temp);
        console.log(this.movies);
      }
    })
  }

getEngTitle(oName : string, eName : string){ //Checks for difference between original and english names
    if (oName != eName){
      return eName = "English Name: (" + eName + ")" ; //Add line Break somehow
    }
  }

onClick(movieId : string){ // Shows Similar films
    document.getElementById("movieListDiv").style.display = 'none';
    document.getElementById("simListDiv").style.display = 'block';
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    this.onSearch(movieId);
  }

 onSearch(movieId : string): void{ // Handles finding similar films
    this.simMovies = [];
    let movieURL : string = 'https://api.themoviedb.org/3/movie/' + movieId + '/similar?api_key=d32c6f01f6fd749822fd5c0c6aaec77b';

    this.http.get(movieURL).subscribe(data => {
      for (var i = 1; i < 50; i++){
        let temp : Movie = [data.results[i].id, data.results[i].original_title, data.results[i].overview, 'https://image.tmdb.org/t/p/w400/' + data.results[i].poster_path, data.results[i].title, data.results[i].release_date];
        temp[5] = temp[5].substr(0,4); //Remove date except year
        this.simMovies.push(temp);
        }
    })
  }

  onBack(){ // Handles going back to homepage (Maybe can be handled in onClick method, checking for the status of the divs)
    document.getElementById("movieListDiv").style.display = 'block';
    document.getElementById("simListDiv").style.display = 'none';
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }

  
}
