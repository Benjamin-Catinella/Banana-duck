import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Artiste} from "./artiste";

@Injectable({
  providedIn: 'root'
})
export class ArtistesService {

  private _url: string = "https://artists-api-ndhd.onrender.com/artists"
  private token: string="979271a77378c204fabb1645e0b3bd66"

  getOptions = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + this.token
    }
  }
  postOptions = {
    headers: {
      'Authorization': 'Bearer ' + this.token
    }
  }

  constructor(private http: HttpClient) { }

  /**
   * Récupère la liste des artistes depuis l'API et la retourne sous forme d'Observable de tableau d'artistes
   */
  getArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(this._url, this.getOptions)
  }
  deleteArtiste(id: number): Observable<Artiste> {
    return this.http.delete<Artiste>(this._url + "/" + id, this.getOptions)
  }
  addArtiste(artiste: Artiste): Observable<Artiste> {
    console.log(artiste)
    return this.http.post<Artiste>(this._url, artiste, this.postOptions)
  }
}
