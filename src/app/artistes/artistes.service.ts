import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Artiste} from "./artiste";

@Injectable({
  providedIn: 'root'
})
export class ArtistesService implements OnDestroy{

  private _url: string = "https://artists-api-ndhd.onrender.com/artists"
  private token: string="979271a77378c204fabb1645e0b3bd66"
  private _artistes: Subject<Artiste[]> = new Subject<Artiste[]>();
  public artistes$: Observable<Artiste[]> = this._artistes.asObservable();

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
  getArtistes(): void{
    this.http.get<Artiste[]>(this._url, this.getOptions).subscribe(data => {
      this._artistes.next(data);
    });
  }
  deleteArtiste(id: number): void{
    this.http.delete<Artiste>(this._url + "/" + id, this.getOptions).subscribe((data) => {
      console.log(data)
      this.getArtistes();
    });
  }
  addArtiste(artiste: Artiste): void {
    this.http.post<Artiste>(this._url, artiste, this.postOptions).subscribe(data => {
      this.getArtistes();
    });
  }

  ngOnDestroy(): void {
    this._artistes.unsubscribe();
  }

}
