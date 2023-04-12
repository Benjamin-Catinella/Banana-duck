import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {ListeArticlesComponent} from "./liste-articles/liste-articles.component";
import {AboutComponent} from "./about/about.component";
import {ArtistesComponent} from "./artistes/artistes.component";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: AccueilComponent },
  { path: 'articles', component: ListeArticlesComponent},
  { path: 'about', component: AboutComponent},
  { path: 'artistes', component: ArtistesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
