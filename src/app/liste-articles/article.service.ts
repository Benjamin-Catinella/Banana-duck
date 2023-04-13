import {Injectable, OnInit} from '@angular/core';
import {Article} from "./article";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService implements OnInit {

  public _articles: BehaviorSubject<Map<number, Article>> = new BehaviorSubject<Map<number, Article>>(new Map<number, Article>());

  articles = this._articles.asObservable();
  index: number = 0;
  constructor() {
  }

  ngOnInit(): void {

  }

  public getArticles(): Article[] {
    return Array.from(this._articles.getValue().values());
  }

  public getArticle(id: number): Article | undefined {
    return this._articles.getValue().get(id);
  }

  public getArticleIndexFromMap(article: Article): number | undefined {
    let articles = this._articles.getValue();
    let index: number | undefined;
    articles.forEach((value: Article, key: number) => {
      if (value === article) {
        index = key;
      }
    });
    return index;
  }

  public addArticle(article: Article): void {
    let articles = this._articles.getValue();
    article.id = this.index;
    articles.set(this.index, article);
    this.index++;
    this._articles.next(articles);
  }

  public deleteArticle(article: Article): void {
    let articles = this._articles.getValue();
    let index = this.getArticleIndexFromMap(article);
    if (index !== undefined
    ) {
      articles.delete(index);
    }
    this._articles.next(articles);
  }

  public emptyArticles(): void {
    this._articles.next(new Map<number, Article>());
  }

}
