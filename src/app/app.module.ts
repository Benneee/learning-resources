import { PagesModule } from './Pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TheHeaderComponent } from './Layout/the-header/the-header.component';
@NgModule({
  declarations: [AppComponent, TheHeaderComponent],
  imports: [BrowserModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
