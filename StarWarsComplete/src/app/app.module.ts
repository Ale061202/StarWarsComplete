import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { MaterialImportsModule } from './modules/material-imports/material-imports.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { SpeciesComponent } from './components/species-list/species-list.component';
import { FilmsComponent } from './components/films-list/films-list.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent,
    FilmsComponent,
    SpeciesComponent,
    CharactersListComponent,
    StarshipListComponent,
    PlanetsListComponent,
    PgPrincipalComponent,
    PlanetsListComponent,
    VehiclesListComponent,
    SpeciesComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
