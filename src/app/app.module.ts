import { PagesModule } from './Pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TheHeaderComponent } from './Layout/the-header/the-header.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [AppComponent, TheHeaderComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
