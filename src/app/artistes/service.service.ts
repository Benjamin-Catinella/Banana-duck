import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private _url = "https://artists-api-ndhd.onrender.com/"
  private token: string="979271a77378c204fabb1645e0b3bd66"

  options = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  constructor(private http: HttpClient) { }

  getArtistes() {
    return this.http.get(this._url + "artists", this.options)
  }
}
