import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MovieComponent } from './movie/movie.component';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    MovieComponent,
    AddMoviesComponent,
    SearchMoviesComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
