import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialImportsModule } from './modules/material-imports.interface';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmsComponent } from './components/films-list/films-list.component';
import { SpeciesComponent } from './components/species-list/species-list.component';
import { StarshipListComponent } from './components/starship-list/starship-list.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PgPrincipalComponent } from './components/pg-principal/pg-principal.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    SpeciesComponent,
    StarshipListComponent,
    PlanetsListComponent,
    PgPrincipalComponent
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
