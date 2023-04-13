import { Component, OnInit } from '@angular/core';
import {Article} from "./article";
import {ArticleService} from "./article.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.scss']
})
export class ListeArticlesComponent implements OnInit {


public articles$: Observable<Map<number, Article>> = this.articleService.articles;

  // List of light colors for the background of the articles cards, must not have a high contrast
  public colors: string[] = [
    '#f0f8ff',
    '#f5f5dc',
    '#ffe4c4',
    '#deb887',
    '#bbd4d5'
  ];
  constructor(public articleService : ArticleService) { }

  ngOnInit(): void {
    // Shuffle randomly the colors
    this.colors.sort(() => Math.random() - 0.5);
    this.articleService.emptyArticles();
    this.articleService.addArticle(new Article('Canard en caoutchouc', 0.5, 'Petit canard en caoutchouc'));
    this.articleService.addArticle(new Article( 'Canard en plastique', 1, 'Petit canard en plastique'));
    this.articleService.addArticle(new Article( 'Canard en bois', 2.55, 'Petit canard en bois'));
    this.articleService.addArticle(new Article( 'Plûme de canard légendaire', 1000, 'Plûme de canard légendaire qui donne la chance'));
    this.articleService.addArticle(new Article( 'Canard en or', 1000000, 'Canard en or qui vaut 1 million d\'euros'));
  }

  public addNewArticleFromForm(article: Article): void {
    this.articleService.addArticle(article);
  }

  public deleteArticle(article: Article): void {
    this.articleService.deleteArticle(article);
  }

  public getBackgroundColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  protected readonly Array = Array;
}
