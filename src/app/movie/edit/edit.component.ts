import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  public id :string = JSON.parse(localStorage.getItem("titleId"));
  public titleMovie :string;
  public playlist :string = JSON.parse(localStorage.getItem("idPlaylist"))

  constructor(
    private moviesService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  public editTitleMovie;

  public editMovie(): void {
    // console.log('this id => ', this.id);
    this.moviesService.deleteMovie(this.id,this.playlist).catch(err=> console.log("err => ", err));
    // console.log('formulaire form value titleMovie => ', formulaire.form.value.titleMovie);
    
    this.moviesService.createMovie(this.titleMovie,this.playlist).catch(err => console.log("err =>", err));

    setTimeout(()=>{
      alert('the task is completed');
      this.router.navigate( [`${this.playlist}/movie/`]); 
    },1000)
  }
}
