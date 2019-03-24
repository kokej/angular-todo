import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', loadChildren: './views/about.module#AboutModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
