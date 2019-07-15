import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMoviesComponent } from './add-movies/add-movies.component';
import { SearchMoviesComponent } from './search-movies/search-movies.component';


const routes: Routes = [
  {path:'movies',component:AddMoviesComponent},
  {path:'moviessearch',component:SearchMoviesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AddMoviesComponent,SearchMoviesComponent];