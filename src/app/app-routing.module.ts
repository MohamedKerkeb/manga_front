import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/account/auth.guard';
import { BibliComponent } from './pages/bibli/bibli.component';
import { HomeComponent } from './pages/home/home.component';
import { MangasComponent } from './pages/mangas/mangas.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'manga/:id', component: MangasComponent },
  { path: 'bibli', canActivate: [AuthGuard], component: BibliComponent },
  {
    path: 'account',
    loadChildren: () =>
      import('./modules/account/account.module').then((m) => m.AccountModule),
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
