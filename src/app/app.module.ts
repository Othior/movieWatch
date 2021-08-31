import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { AddComponent } from './movie/add/add.component';
import { EditComponent } from './movie/edit/edit.component';
import { FormsModule } from '@angular/forms';
import { PlaylistComponent } from './playlist/playlist.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    AddComponent,
    EditComponent,
    PlaylistComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
