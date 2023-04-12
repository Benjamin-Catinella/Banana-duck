import { TestBed } from '@angular/core/testing';

import { ArticleService } from './article.service';
import {Article} from "./article";

describe('ArticleServiceService', () => {
  let service: ArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticleService);
    // Empty the list of articles
    service.emptyArticles();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should empty all articles', () => {
    // Given
    let article = new Article('Canard en caoutchouc', 0.5, 'Petit canard en caoutchouc');
    let article2 = new Article('Canard en plastique', 1, 'Petit canard en plastique');
    service.addArticle(article);
    service.addArticle(article2);

    // When
    service.emptyArticles();

    // Then
    expect(service.getArticles().length).toEqual(0);
  });

  it('should add an article', () => {
    // Given
    let article = new Article('Canard en caoutchouc', 0.5, 'Petit canard en caoutchouc');

    // When
    service.addArticle(article);

    // Then
    expect(findArticleByName(service.getArticles(), 'Canard en caoutchouc')).toEqual(article);
  });

  it('should delete an article', () => {
    // Given
    let article = new Article('Canard en caoutchouc', 0.5, 'Petit canard en caoutchouc');

    // When
    service.addArticle(article);
    service.deleteArticle(article);

    // Then
    expect(findArticleByName(service.getArticles(), 'Canard en caoutchouc')).toBeNull();
  });
});

function findArticleByName(articles : Article[] , nom : string ) : Article | null {
  for (let article of articles) {
    if (article.nom === nom) {
      return article;
    }
  }
  return null;
}
