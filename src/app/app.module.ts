import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { AuthModule } from './auth/auth.module';
import { FilmComponent } from './components/film/film.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmPageComponent } from './components/film-page/film-page.component';
import { FilmPageModule } from './components/film-page/film-page.module';


@NgModule({
  declarations: [
    AppComponent,

    FilmComponent,
    NavbarComponent,
    FilmPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    FilmPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
