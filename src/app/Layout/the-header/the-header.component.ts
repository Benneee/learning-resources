import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-header',
  templateUrl: './the-header.component.html',
  styleUrls: ['./the-header.component.css'],
})
export class TheHeaderComponent implements OnInit {
  @Input() title?: string;

  constructor() {}

  ngOnInit(): void {}
}
