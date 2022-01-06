import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'; */

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FootBarComponent } from './foot-bar/foot-bar.component';
import { SidenavAutosizeExample } from './side-menu/side-menu.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { MainAppComponent } from './main-section/main-app.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    AppRoutingModule,
    /* FontAwesomeModule, */
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    TopBarComponent,
    SidenavAutosizeExample,
    FootBarComponent,
    MainAppComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
