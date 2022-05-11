import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NoticiasModule} from "./noticias/noticias.module";
import { ContenidoCentralComponent } from './contenido-central.component';



@NgModule({
  declarations: [
    ContenidoCentralComponent
  ],
  exports: [
    ContenidoCentralComponent
  ],
  imports: [
    CommonModule,
    NoticiasModule
  ]
})
export class ContenidoCentralModule { }
