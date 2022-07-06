import { WordService } from '../../../app/Providers/word.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subject, timer } from 'rxjs';
import { SwiperOptions } from 'swiper';

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

  referrals = [
    {
      image: 'trusted-video',
      header: 'I love bumpa',
      body: 'Get a personal business website, upload an unlimited number of product',
      name: 'Chidimma',
    },
    {
      image: 'trusted-video',
      header: 'I love bumpa Features',
      body: 'Get a personal business website, upload an unlimited number of product',
      name: 'Bola',
    },
    {
      image: 'trusted-video',
      header: 'I love 2222 Features',
      body: 'Get a personal business website, upload an unlimited number of product',
      name: 'Bola',
    },
    {
      image: 'trusted-video',
      header: 'I love yyyy Features',
      body: 'Get a personal business website, upload an unlimited number of product',
      name: 'Bola',
    },
  ];

  referralIndex = 0;

  public config: SwiperOptions = {
    a11y: { enabled: true },
    direction: 'vertical',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: true,
    navigation: false,
    pagination: false,
    autoplay: true,
    autoHeight: true,
  };

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
    // Check if it's a valid English word before unscrambling
    this.findWordInDictionary(word);
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
    timer(1000).subscribe((): void => {
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
