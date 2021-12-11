import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoredResourcesComponent } from './stored-resources/stored-resources.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { ResourceItemComponent } from './resource-item/resource-item.component';
import { AddNewResourceComponent } from './add-new-resource/add-new-resource.component';

@NgModule({
  declarations: [
    StoredResourcesComponent,
    ResourcesPageComponent,
    ResourceItemComponent,
    AddNewResourceComponent,
  ],
  imports: [CommonModule],
  exports: [ResourcesPageComponent],
})
export class PagesModule {}
