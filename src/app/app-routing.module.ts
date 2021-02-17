import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './movie/add/add.component';
import { EditComponent } from './movie/edit/edit.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path:'' , component: MovieComponent },
  { path:'add-movie' , component: AddComponent },
  { path:'edit-movie' , component: EditComponent },
  // { path:'**' , component: MovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
