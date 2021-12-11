import { BaseButtonComponent } from './../Base/base-button/base-button.component';
import { BaseCardComponent } from './../Base/base-card/base-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoredResourcesComponent } from './stored-resources/stored-resources.component';
import { ResourcesPageComponent } from './resources-page/resources-page.component';
import { ResourceItemComponent } from './resource-item/resource-item.component';
import { AddNewResourceComponent } from './add-new-resource/add-new-resource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StoredResourcesComponent,
    ResourcesPageComponent,
    ResourceItemComponent,
    AddNewResourceComponent,
    BaseCardComponent,
    BaseButtonComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ResourcesPageComponent, BaseCardComponent, BaseButtonComponent],
})
export class PagesModule {}
