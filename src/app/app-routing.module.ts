import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'book/:isbn', component: BookDetailsComponent },
  // { path: 'book', component: BookListComponent },
  // { path: 'books', component: BookListComponent },
  { path: 'home', component: HomeComponent },
  // { path: 'bookform', component: BookFormComponent },
  // { path: 'bausteine', loadChildren: () => import('./bausteine/bausteine.module').then(m => m.BausteineModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
