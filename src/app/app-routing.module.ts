import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CharactersdetailsComponent } from './views/charactersdetails/charactersdetails.component';
import { IndexComponent } from './views/index/index.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'characterDetail/:id', component: CharactersdetailsComponent },
  { path: '**', redirectTo:'' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
