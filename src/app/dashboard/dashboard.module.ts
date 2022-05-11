import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {DashboardComponent} from "./dashboard.component";
import {ContenidoCentralModule} from "../contenido-central/contenido-central.module";

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    ContenidoCentralModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
