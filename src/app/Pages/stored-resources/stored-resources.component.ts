import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stored-resources',
  templateUrl: './stored-resources.component.html',
  styleUrls: ['./stored-resources.component.css'],
})
export class StoredResourcesComponent implements OnInit {
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

  ngOnInit(): void {}
}
