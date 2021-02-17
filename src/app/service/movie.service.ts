import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  public toWatch : Array<string> = [
    "Vinkings",
    "The Order",
    "les Chroniques de Brigertones",
  ]

}
