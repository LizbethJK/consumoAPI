import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShowMovieComponent } from './show-movie/show-movie.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  { path: 'showmovie', component: ShowMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
