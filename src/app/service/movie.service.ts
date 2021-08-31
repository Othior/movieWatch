import { Injectable } from '@angular/core';
import firebase from 'firebase/app';
import "firebase/app"
import { db } from '../firebase/fire';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  public listmovies;

  constructor() { 
    this.getOneList("nous coeur").then(data => {
      data.forEach(doc => {
        this.listmovies = doc.data().listmovies;
      });
    });
  }

  public getList(){
    return db.collection("titleMovie").get();
  }
  public getOneList(title: string){
    return db.collection("playlist").where("title", "==" ,title).get();
  }

  public getOne(id: string){
    return db.collection("titleMovie").where("title" ,"==" ,id).get();
  }

  
  public deleteMovie(id: string,namePlaylist: string){
    return db.collection("playlist").doc(namePlaylist).update({
      "listmovies": firebase.firestore.FieldValue.arrayRemove(id)
    });
  }

  public createMovie(id :string, namePlaylist :string){
    return db.collection("playlist").doc(namePlaylist).update({
      "listmovies" : firebase.firestore.FieldValue.arrayUnion(id)
    })
  }

  public getPlaylist(){
    return db.collection("playlist").get();
  }

  public random(numberMax: number ){
    return Math.floor((Math.random() * numberMax-1) + 1);
  }

  public deletePlaylist(id: string){
    return db.collection("playlist").doc(id).delete();
  }

}
