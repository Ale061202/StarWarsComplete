import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlanetsListComponent } from './planets-list/planets-list.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialImportsModule } from './material-imports/materialimports';


@NgModule({
  declarations: [
    AppComponent,
    PlanetsListComponent
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
