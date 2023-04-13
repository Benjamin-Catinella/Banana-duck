import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ArtistesService} from "../artistes.service";
import {Artiste} from "../artiste";


@Component({
  selector: 'app-artiste-editor-component',
  templateUrl: './editor-component.component.html',
  styleUrls: ['./editor-component.component.scss']
})
export class ArtisteEditor implements OnInit {

  nom = new FormControl('');
  photo = new FormControl('');

  nomValide: boolean = true;
  photoValide: boolean = true;

  constructor(private artisteService: ArtistesService ) { }

  ngOnInit(): void {
  }

  public addArtiste():void{
    if(!this.validate()){
      return;
    }
    let artiste: Artiste = new Artiste(
      this.nom.value,
      this.photo.value
    );
    // Calls the service to add the artiste to the api
    this.artisteService.addArtiste(artiste).subscribe(data => {
      console.log(data);
    });
  }

  private validate(): boolean{
    this.validateNom();
    this.validatePhotoUrl();
    return this.nomValide && this.photoValide;
  }

  // Le nom ne doit pas être vide et doit contenir au moins 3 caractères
  public validateNom(): void{
    this.nomValide = this.nom.value.length >= 3 && !this.nom.value.match(/\d+/g);
  }

  // should be an url : /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g
  public validatePhotoUrl(): void{
    this.photoValide = this.photo.value.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/g) != null;
  }

}
