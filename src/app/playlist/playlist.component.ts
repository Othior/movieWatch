import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { db } from '../firebase/fire';
import { MovieService } from '../service/movie.service';


@Component({
  selector: 'Playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {

  public titlePlaylist: string;
  public listPlaylist = [];

  constructor(
    private service : MovieService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getPlaylist().then(data => {
      data.forEach(doc => {
        this.listPlaylist.push(doc.id);
      });
    });
  }

  createPlaylist(): void {

    // this.titlePlaylist;
    db.collection("playlist").doc(this.titlePlaylist).set({
      title:this.titlePlaylist,
      listmovies:[]
    })

    localStorage.setItem("idPlaylist",JSON.stringify(this.titlePlaylist))
    
    alert(`your playlist as been created : ${this.titlePlaylist}`)

    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }

  movePlaylist(playlistName: string): void{

    localStorage.setItem("idPlaylist",JSON.stringify(playlistName))
    this.router.navigate([`${playlistName} + /movie`]);

  }

  deletePlaylist(playlistName: string): void{

    this.service.deletePlaylist(playlistName).then(doc => {
      alert(`your playlist as been deleted : ${playlistName}`) 
      window.location.reload();
  }).catch(err => console.log("err => ",err))
  }

}
