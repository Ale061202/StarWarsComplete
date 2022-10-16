import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';

import { PlanetsListComponent } from './planets-list/planets-list.component';

const routes: Routes = [
  {path: 'planets-list', component: PlanetsListComponent,pathMatch:'full'},
  {path: 'pgPrincipal', component: PgPrincipalComponent,pathMatch:'full'},
  {path: 'starship-list',component:StarshipListComponent,pathMatch:'full'},
  {path: '',redirectTo:'planets-list',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
