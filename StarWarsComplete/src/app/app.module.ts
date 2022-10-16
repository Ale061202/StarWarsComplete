import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialImportsModule } from './modules/material-imports.interface';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { MaterialImportsModule } from './modules/material-imports/material-imports.module';
import { FilmsComponent } from './components/films-list/films-list.component';
import { SpeciesComponent } from './components/species-list/species-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent
    FilmsComponent,
    SpeciesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
