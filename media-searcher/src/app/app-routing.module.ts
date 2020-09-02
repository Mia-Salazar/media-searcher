import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './pages/home/home.component'
import { DetailComponent } from './pages/detail/detail.component'
import { SearchComponent } from './pages/search/search.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'media/:id', component: DetailComponent },
  { path: 'search', component: SearchComponent },
  { path: 'routePath', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }