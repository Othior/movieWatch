import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { db } from '../firebase/fire';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  // public toWatch : Array<string> = [
  //   "Vinkings",
  //   "The Order",
  //   "les Chroniques de Brigertones",
  // ]

  public getList(){
    return db.collection("titleMovie").get();
  }

  public getOne(id: string){
    return db.collection("titleMovie").where("title" ,"==" ,id).get();
  }

  public deleteMovie(id: string){
    return db.collection("titleMovie").doc(id).delete();
  }

  public editMovie(id: string){
    return db.collection("titleMovie").doc(id);
  }

}
