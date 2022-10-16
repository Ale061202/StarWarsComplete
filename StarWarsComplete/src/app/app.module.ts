import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilmsComponent } from './components/films-list/films-list.component';
import { SpeciesComponent } from './components/species-list/species-list.component';
import { VehiclesListComponent } from './components/vehicles-list/vehicles-list.component';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './material-imports/materialimports';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    SpeciesComponent,
    VehiclesListComponent,
    PlanetsListComponent
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
