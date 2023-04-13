import { Component, OnInit } from '@angular/core';
import {ArtistesService} from "./artistes.service";
import {Artiste} from "./artiste";

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.scss']
})
export class ArtistesComponent implements OnInit {

  artistes: Artiste[] = []

  constructor(private artistesService: ArtistesService) { }

  ngOnInit(): void {
    this.artistesService.getArtistes().subscribe(data => {
      this.artistes = data
    });

  }

  deleteArtiste(id: number) {
    this.artistesService.deleteArtiste(id).subscribe(data => {
      this.artistes = this.artistes.filter(artiste => artiste.id !== id)
    })
  }

}
