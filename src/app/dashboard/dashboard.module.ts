import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import {DashboardComponent} from "./dashboard.component";
import {ContenidoCentralModule} from "../contenido-central/contenido-central.module";
import {FraseComponent} from "../contenido-central/frase/frase.component";

@NgModule({
  declarations: [DashboardComponent,
    // FraseComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContenidoCentralModule,
  ],
  exports: [DashboardComponent,
    //FraseComponent
  ]
})
export class DashboardModule { }
