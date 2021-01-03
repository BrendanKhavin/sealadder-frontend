import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})



export class MovieComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private http: HttpClient) {   }

  ngOnInit(): void {
    this.http.get('https://api.themoviedb.org/3/discover/movie?api_key=d32c6f01f6fd749822fd5c0c6aaec77b&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=878').subscribe(data => {
      // console.log(data);  
      for (var i = 0; i < 50; i++){
      let temp : Movie = [data.results[i].id, data.results[i].original_title, data.results[i].overview, 'https://image.tmdb.org/t/p/w400/' + data.results[i].poster_path, data.results[i].title, data.results[i].release_date];
      temp[5] = temp[5].substr(0,4); //Remove date except year
      this.movies.push(temp);
      // console.log(temp);
      }
    })
  }

  getEngTitle(oName : string, eName : string){
    if (oName != eName){
      return eName = "English Name: (" + eName + ")" ; //Add line Break somehow
    }
  }

}
