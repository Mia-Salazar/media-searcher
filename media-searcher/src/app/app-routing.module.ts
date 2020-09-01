import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component'
import { DetailComponent } from './pages/detail/detail.component'

const routes: Routes = [
  {path: 'media/:id', component: DetailComponent},
  {path: 'home', component: HomeComponent},
  {path: 'routePath', component: HomeComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
