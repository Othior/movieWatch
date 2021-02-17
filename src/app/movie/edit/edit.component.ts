import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id = JSON.parse(localStorage.getItem("titleId"));

  constructor(
    private moviesService: MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  public editTitleMovie;

  public editMovie(formulaire :NgForm): void {
    this.moviesService.deleteMovie(this.id)
    
    this.moviesService.editMovie(this.id).set({
      title:formulaire.form.value.titleMovie
    })
    setTimeout(()=>{
      alert('the task is complited');
      this.router.navigate(['']);
    },1000)
  }
}
