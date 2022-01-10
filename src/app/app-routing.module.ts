import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './sites/home/home.component';
import { LoremComponent } from './sites/lorem/lorem.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, ...{ title: 'Home' } },
  { path: 'lorem', component: LoremComponent, ...{ title: 'Lorem' } },
  // { path: 'book/:isbn', component: BookDetailsComponent },
  // { path: 'book', component: BookListComponent },
  // { path: 'books', component: BookListComponent },
  // { path: 'bookform', component: BookFormComponent },
  // { path: 'bausteine', loadChildren: () => import('./bausteine/bausteine.module').then(m => m.BausteineModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {
  public static mypaths = routes.filter((p) => p.path != '');

  navItems = [
    { path: 'home', title: 'Home' },
    { path: 'lorem', title: 'Lorem Ipsum' },
    { path: 'home', title: 'Geräte' },
    { path: 'wizards', title: 'Wizards' },
    { path: 'home', title: 'Fernzugriff' },
    { path: 'home', title: 'Zählertabellen' },
  ];
}
