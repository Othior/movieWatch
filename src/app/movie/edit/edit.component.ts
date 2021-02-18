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
    console.log('this id => ', this.id);
    this.moviesService.deleteMovie(this.id).then();
    console.log('formulaire form value titleMovie => ', formulaire.form.value.titleMovie);
    
    this.moviesService.editMovie(formulaire.form.value.titleMovie).set({
      title:formulaire.form.value.titleMovie
    })
    setTimeout(()=>{
      alert('the task is complited');
      this.router.navigate(['']);
    },1000)
  }
}
