import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources-page',
  templateUrl: './resources-page.component.html',
  styleUrls: ['./resources-page.component.css'],
})
export class ResourcesPageComponent implements OnInit {
  selectedTab = 'stored-resources';

  constructor() {}

  ngOnInit(): void {}

  selectComponent(tab: string) {
    this.selectedTab = tab;
  }

  storedResourcesBtnMode() {
    return this.selectedTab === 'stored-resources' ? null : 'flat';
  }

  addResourceBtnMode() {
    return this.selectedTab === 'add-resource' ? null : 'flat';
  }
}
