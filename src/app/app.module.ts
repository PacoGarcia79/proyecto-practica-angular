import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
