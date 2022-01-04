import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const dictionaryUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en';

@Injectable({
  providedIn: 'root',
})
export class WordService {
  constructor(private http: HttpClient) {}

  getWordMeaning(word: string): Observable<any> {
    return this.http.get(`${dictionaryUrl}/${word}`);
  }
}
