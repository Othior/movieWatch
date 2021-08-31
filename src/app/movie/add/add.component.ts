import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public titleMovie: string;
  public playlist :string = JSON.parse(localStorage.getItem("idPlaylist"))

  constructor(
    private serviceMovie:MovieService
    ) { }

  ngOnInit(): void {
  }

  public addMovie(): void {
    
    this.serviceMovie.createMovie(this.titleMovie,this.playlist).then(doc => {
        setTimeout(()=>{
        alert("the task is completed :D");
        },2000)
        
    }).catch(err => {
      console.log("err => ", err)
    });

    

  }

  
}
