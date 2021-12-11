import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-button',
  templateUrl: './base-button.component.html',
  styleUrls: ['./base-button.component.css'],
})
export class BaseButtonComponent implements OnInit {
  @Input() type!: string | any;
  @Input() mode!: string | any;
  @Input() disabled!: boolean;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickBtn(event: any) {
    this.onClick.emit(event);
  }
}
