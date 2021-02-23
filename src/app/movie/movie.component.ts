import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {


  public listMovie = [];
  private nbRand: number;
  private movie: string = "";

  constructor(
    private service: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getList().then(data => {
      data.forEach(doc => {
        this.listMovie.push(doc.data().title);
      });
    });
  }

  public editMovie(id: string) {

    localStorage.setItem("titleId", JSON.stringify(id));
    this.router.navigate(['/edit-movie']);

  }

  public deleteMovie(id: string) {

    console.log("deleteMoviesid =>", id);

    this.service.deleteMovie(id);

    setTimeout(() => {
      alert("the movies is deleted");
      window.location.reload();
    }, 1000);

  }

  public randomMovie() {
    
    setTimeout(() => {
      this.nbRand = this.random(this.listMovie.length);
      alert(this.listMovie[this.nbRand] + ' see you soon :D');
      this.nbRand = 0;
    }, 2000)
    
  }

  public random(numberMax: number){
    return this.nbRand = Math.floor((Math.random() * numberMax-1) + 1);
  }

}
