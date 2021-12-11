import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stored-resources',
  templateUrl: './stored-resources.component.html',
  styleUrls: ['./stored-resources.component.css'],
})
export class StoredResourcesComponent implements OnInit {
  storedResources: any[] = [];
  resources = [
    {
      id: 'official-guide',
      title: 'Official Guide',
      description: 'The official Vue.js documentation',
      link: 'https://vuejs.org',
    },
    {
      id: 'google',
      title: 'Google',
      description: 'The largest dev helper',
      link: 'https://google.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.getItemsFromLS();
  }

  getItemsFromLS() {
    if (sessionStorage.getItem('resourceItems')) {
      this.storedResources = JSON.parse(
        sessionStorage.getItem('resourceItems') || '[]'
      );
    } else {
      sessionStorage.setItem('resourceItems', JSON.stringify(this.resources));
      this.storedResources = this.resources;
    }
  }

  deleteItem(item: any) {
    let itemIndex: any = this.storedResources.findIndex(
      (resource) => resource.id === item.id
    );
    this.storedResources.splice(itemIndex, 1);
    sessionStorage.removeItem('resourceItems');
    sessionStorage.setItem(
      'resourceItems',
      JSON.stringify(this.storedResources)
    );
  }

  addNewResource() {}
}
