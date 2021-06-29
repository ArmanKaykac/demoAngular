import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { InputsModule } from "@progress/kendo-angular-inputs";

import { AppComponent } from "./app.component";

import "hammerjs";
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { DataGridComponent } from './data-grid/data-grid.component';
import { HeaderComponent } from './header/header.component';
import { LayoutModule } from '@progress/kendo-angular-layout';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GridModule,
    ChartsModule,
    InputsModule,
    PDFModule,
    ExcelModule,
    LayoutModule
  ],
  declarations: [AppComponent, ChartComponent, DataGridComponent, HeaderComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}