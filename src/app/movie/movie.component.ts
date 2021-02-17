import { Component, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  

  constructor(
    private service: MovieService
  ) { }

  ngOnInit(): void {
  }

  public listMovie: Array<string> = this.service.toWatch;

}
