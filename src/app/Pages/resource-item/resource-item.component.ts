import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css'],
})
export class ResourceItemComponent implements OnInit {
  @Input() resource: any;

  constructor() {}

  ngOnInit(): void {}
}
