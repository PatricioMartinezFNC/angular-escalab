import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';

const routes: Routes = [
  {
    path: 'listado-hp',
    loadChildren: () =>
      import('./components/hp/hp.module').then((m) => m.HpModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'listado-ghibli',
    loadChildren: () =>
      import('./components/ghibli/ghibli.module').then((m) => m.GhibliModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'buscador-pokemon',
    loadChildren: () =>
      import('./components/buscador-pokemon/buscador-pokemon.module').then(
        (m) => m.BuscadorPokemonModule
      ),
      canActivate: [AuthGuard],
  },
  { path: '**', pathMatch: 'full', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
