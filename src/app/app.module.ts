import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// import {
//   MatToolbarModule,
//   MatSidenavModule,
//   MatListModule,
//   MatButtonModule,
//   MatIconModule,
// } from '@angular/material';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; */

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { SidenavAutosizeExample } from './side-menu/side-menu.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { AppMainComponent } from './app-main/app-main.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,

    /* FontAwesomeModule, */
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    SidenavAutosizeExample,
    FootBarComponent,
    AppMainComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
