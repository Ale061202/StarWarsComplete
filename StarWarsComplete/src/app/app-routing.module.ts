import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmsComponent } from './components/films-list/films-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';

const routes: Routes = [
  {path: 'planets-list', component: PlanetsListComponent,pathMatch:'full'},
  {path: 'starship-list',component:StarshipListComponent,pathMatch:'full'},
  {path: 'vehicles-list',component:VehiclesListComponent,pathMatch:'full'},
  {path: 'films-list', component:FilmsComponent,pathMatch:'full'},
  {path: '',redirectTo:'planets-list',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

