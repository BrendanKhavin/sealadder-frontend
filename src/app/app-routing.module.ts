import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SimmovieComponent } from './simmovie/simmovie.component';

const routes: Routes = [
  {path: 'movies', component: MovieComponent},
  {path: 'similar-movies', component: SimmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MovieComponent, SimmovieComponent]