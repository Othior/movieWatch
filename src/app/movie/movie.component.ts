import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  public listMovies = [];
  public listMovie ;
  private nbRand: number;
  private movie: string = "";
  public playlist: string = JSON.parse(localStorage.getItem("idPlaylist"));

  constructor(
    private service: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getOneList(this.playlist).then(data => {
      data.forEach(doc => {
        this.listMovie = doc.data().listmovies;
      });
    });
  }

  public editMovie(id: string) {

    localStorage.setItem("titleId", JSON.stringify(id));
    this.router.navigate( [`${this.playlist}/movie/edit-movie`]); 

  }

  public deleteMovie(id: string) {

    this.service.deleteMovie(id,this.playlist)
    .catch(err => {
      console.log("err => ", err)
    });

    setTimeout(() => {
      alert("the movies is deleted");
      window.location.reload();
    }, 1000);

  }

  public randomMovie() {
    
    setTimeout(() => {
      this.nbRand = this.service.random(this.listMovie.length);
      alert(this.listMovie[this.nbRand] + ' see you soon :D');
      this.nbRand = 0;
    }, 2000)
  }
}
