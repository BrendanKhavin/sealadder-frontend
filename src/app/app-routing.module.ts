import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { SimmovieComponent } from './simmovie/simmovie.component';

const routes: Routes = [
  {path: '', component: MovieComponent},
  {path: 'similar-movies/:movie.id/:movie.title', component: SimmovieComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MovieComponent, SimmovieComponent]