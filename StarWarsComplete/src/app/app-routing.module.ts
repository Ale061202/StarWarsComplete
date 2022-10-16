import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';

const routes: Routes = [
  {path: 'planets-list', component: PlanetsListComponent},
  {path: '',redirectTo:'planets-list'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
