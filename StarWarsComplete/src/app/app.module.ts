import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsListComponent } from './components/planets-list/planets-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { MaterialImportsModule } from './modules/material-imports.interface';
import { FilmsComponent } from './components/films-list/films-list.component';
import { SpeciesComponent } from './components/species-list/species-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipListComponent,
    VehiclesListComponent,
    PlanetsListComponent,
    PgPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
