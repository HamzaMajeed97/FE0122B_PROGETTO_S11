import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [{

  path: '',
  canActivate: [AuthGuard],
  loadChildren: ()=>
  import('./components/film-page/film-page.module').then((x)=>x.FilmPageModule)
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule { }
