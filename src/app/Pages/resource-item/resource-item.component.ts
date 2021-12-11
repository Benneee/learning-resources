import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resource-item',
  templateUrl: './resource-item.component.html',
  styleUrls: ['./resource-item.component.css'],
})
export class ResourceItemComponent implements OnInit {
  @Output() itemToDelete = new EventEmitter<any>();
  @Input() resource: any;

  constructor() {}

  ngOnInit(): void {}

  deleteResource(resource: any) {
    this.itemToDelete.emit(resource);
  }
}
