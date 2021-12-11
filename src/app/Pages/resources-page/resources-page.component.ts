import { Component, OnInit, EventEmitter, Output } from '@angular/core';

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

  addNewResource(e: any) {
    const resourceItems = JSON.parse(
      sessionStorage.getItem('resourceItems') || '[]'
    );
    resourceItems.push(e);
    const newResources = [...resourceItems];
    sessionStorage.removeItem('resourceItems');
    sessionStorage.setItem('resourceItems', JSON.stringify(newResources));
    this.selectedTab = 'stored-resources';
  }
}
