import { Component, OnInit } from '@angular/core';
import firebase from 'firebase';
import { db } from '../../firebase/fire'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  public titleMovie: string;

  constructor() { }

  ngOnInit(): void {
  }

  public addMovie(): void {
    this.titleMovie
    console.log("title Movie => ", this.titleMovie);

    db.collection("titleMovie").doc(this.titleMovie).set({
      title:this.titleMovie
    })

    setTimeout(()=>{
      alert("the task is complited :D");
    },2000)

  }

}
