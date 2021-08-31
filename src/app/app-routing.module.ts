import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './movie/add/add.component';
import { EditComponent } from './movie/edit/edit.component';
import { MovieComponent } from './movie/movie.component';
import { PlaylistComponent } from './playlist/playlist.component';

const routes: Routes = [
  { path:'' , component: HomeComponent },
  { path:':id/movie/add-movie' , component: AddComponent },
  { path:':id/movie/edit-movie' , component: EditComponent },
  { path:':id/movie' , component: MovieComponent },
  // { path:'playlist/:id' , component: PlaylistComponent },
  // { path:'**' , component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
