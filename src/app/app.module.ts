import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeArticlesComponent } from './liste-articles/liste-articles.component';
import { NavbarComponent } from './navbar/navbar.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditorComponentComponent } from './editor-component/editor-component.component';
import { AboutComponent } from './about/about.component';
import { ArtistesComponent } from './artistes/artistes.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ListeArticlesComponent,
    NavbarComponent,
    EditorComponentComponent,
    AboutComponent,
    ArtistesComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
