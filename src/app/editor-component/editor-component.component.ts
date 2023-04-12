import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {ArticleService} from "../liste-articles/article.service";
import {Article} from "../liste-articles/article";

@Component({
  selector: 'app-editor-component',
  templateUrl: './editor-component.component.html',
  styleUrls: ['./editor-component.component.scss']
})
export class EditorComponentComponent implements OnInit {

  nom = new FormControl('');
  prix = new FormControl('');
  description = new FormControl('');

  nomValide: boolean = true;
  prixValide: boolean = true;
  descriptionValide: boolean = true;

  constructor(private articleService: ArticleService ) { }

  ngOnInit(): void {
  }

  public addArticle():void{
    if(!this.validate()){
      return;
    }
    let article: Article = new Article(
      this.nom.value,
      this.prix.value,
      this.description.value)
    this.articleService.addArticle(article);
  }

  private validate(): boolean{
    this.validateNom();
    this.validatePrix();
    this.validateDescription();
    return this.nomValide && this.prixValide && this.descriptionValide;
  }

  // Le nom ne doit pas être vide et doit contenir au moins 3 caractères
  // Il doit aussi ne pas être composé de chiffres
  public validateNom(): void{
    this.nomValide = this.nom.value.length >= 3 && !this.nom.value.match(/\d+/g);
  }

  // Le prix doit être un nombre positif ou 0, ne doit pas être vide
  public validatePrix(): void {
    console.log(this.prix.value);
    this.prixValide = !isNaN(this.prix.value) && this.prix.value >= 0 && this.prix.value !== '';
  }

  // La description peut être vide donc aucune validation n'est nécessaire
  public validateDescription(): void{
    this.descriptionValide = true;
  }
}
