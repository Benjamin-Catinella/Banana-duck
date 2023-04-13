import {Component, OnDestroy, OnInit} from '@angular/core';
import {ArtistesService} from "./artistes.service";
import {Artiste} from "./artiste";
import {Observable} from "rxjs";

@Component({
  selector: 'app-artistes',
  templateUrl: './artistes.component.html',
  styleUrls: ['./artistes.component.scss']
})
export class ArtistesComponent implements OnInit, OnDestroy {

  artistes$: Observable<Artiste[]> = this.artistesService.artistes$;
  public subscribeInterval: any;
  constructor(private artistesService: ArtistesService) { }

  ngOnInit(): void {
    this.artistesService.getArtistes();
    this.subscribeInterval= setInterval(() => {
      this.artistesService.getArtistes();
    }, 1000);
  }

  deleteArtiste(id: number) {
    this.artistesService.deleteArtiste(id);
  }

  ngOnDestroy(): void {
    clearInterval(this.subscribeInterval);
  }

}
