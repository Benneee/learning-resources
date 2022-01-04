import { FindWordComponent } from './Pages/find-word/find-word.component';
import { ResourcesPageComponent } from './Pages/resources-page/resources-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'learning-resources', component: ResourcesPageComponent },
  { path: 'find-word', component: FindWordComponent },
  // { path: "", redirectTo: "learning-resources", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
