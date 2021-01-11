import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './movie/movie.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SimmovieComponent } from './simmovie/simmovie.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: MovieComponent},
  {path: 'similar-movies/:movie.id/:movie.title', component: SimmovieComponent, runGuardsAndResolvers: 'always'},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MovieComponent, SimmovieComponent, NotFoundComponent]