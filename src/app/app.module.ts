import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MaxMinMeterComponent } from './max-min-meter/max-min-meter.component';
import { SqaureFlexComponent } from './sqaure-flex/sqaure-flex.component';
import { HttpClientModule } from '@angular/common/http';
import { TestRequestModule } from './test-request/test-request.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ShoppingModule } from './shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    MaxMinMeterComponent,
    SqaureFlexComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TestRequestModule,
    MultiSelectModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ShoppingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
