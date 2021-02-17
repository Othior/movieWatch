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

  constructor(
    private service: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getList().then(data => {
      data.forEach(doc => {
        // console.log(doc.id,' =>' , doc.data().title);
        this.listMovie.push(doc.data().title);
      });
    });
  }
  
  public editMovie(id: string){

    localStorage.setItem("titleId",JSON.stringify(id));
    this.router.navigate(['/edit-movie']);

  }

  public deleteMovie(id: string) {

    console.log("deleteMoviesid =>", id);

    this.service.deleteMovie(id);

    setTimeout(()=>{
      alert("the movies is deleted");
      window.location.reload();
    },1000);

  }
  // public listMovie: Array<string> = this.service.toWatch;

}
