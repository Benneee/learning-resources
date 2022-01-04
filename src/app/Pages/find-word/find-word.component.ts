import { WordService } from '../../../app/Providers/word.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';

@Component({
  selector: 'app-find-word',
  templateUrl: './find-word.component.html',
  styleUrls: ['./find-word.component.css'],
})
export class FindWordComponent implements OnInit {
  newWordForm!: FormGroup;
  isLoading = false;
  usedWords: any[] = [];
  wordMeaning: any = null;

  constructor(
    private readonly fb: FormBuilder,
    private readonly wordService: WordService
  ) {}

  ngOnInit(): void {
    this.createNewWordForm();
  }

  createNewWordForm() {
    this.newWordForm = this.fb.group({
      word: ['', Validators.required],
    });
  }

  submitWord() {
    const { word } = this.newWordForm.value;
    this.randomizeWord(word);
  }

  randomizeWord(word: any) {
    word = word.toLowerCase();
    let newWord = '';
    for (let i in word) {
      let randLetter = word.charAt(Math.floor(Math.random() * word.length));
      newWord = newWord.concat(randLetter);
      word =
        word.slice(0, word.indexOf(randLetter)) +
        word.slice(Number(word.indexOf(randLetter) + 1), word.length);
    }
    if (!this.usedWords.includes(newWord)) {
      this.usedWords.push(newWord);
      this.findWordInDictionary(newWord);
    } else {
      this.randomizeWord(newWord);
    }
  }

  isValidResponse(response: any): boolean {
    return Array.isArray(response);
  }

  findWordInDictionary(word: string): void {
    this.isLoading = true;
    timer(3000).subscribe((): void => {
      this.wordService.getWordMeaning(word).subscribe({
        next: (response: any) => {
          // If word isn't in dictionary, randomize and rerun the request
          // Only when response returns an array is when we have a valid word
          if (!this.isValidResponse(response)) {
            this.randomizeWord(word);
          } else {
            // Display meaning of word
            this.wordMeaning = response[0];
            this.usedWords = [];
            this.isLoading = false;
          }
        },
        error: (err: any) => {
          this.randomizeWord(word);
          console.error('error: ', err);
        },
      });
    });
  }
}
