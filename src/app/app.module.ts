import { PagesModule } from './Pages/pages.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TheHeaderComponent } from './Layout/the-header/the-header.component';
import { BaseButtonComponent } from './Base/base-button/base-button.component';
import { BaseCardComponent } from './Base/base-card/base-card.component';
import { BaseDialogComponent } from './Base/base-dialog/base-dialog.component';
import { TheFooterComponent } from './Layout/the-footer/the-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TheHeaderComponent,
    BaseButtonComponent,
    BaseCardComponent,
    BaseDialogComponent,
    TheFooterComponent,
  ],
  imports: [BrowserModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
