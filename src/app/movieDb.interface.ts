import { HttpClient } from "@angular/common/http";
import { MovieDbService } from "./movie-db.service";

export interface IMovieDb {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    runtime: string;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    movieEmotion: [string, number][];
}

  
export interface IMoviesDb {
    page: number;
    results: IMovieDb[];
    total_pages: number;
    total_results: number;   
}

