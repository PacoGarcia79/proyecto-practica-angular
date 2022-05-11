import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ContenidoCentralComponent} from './contenido-central.component';
import {FraseComponent} from './frase/frase.component';
import {NoticiasComponent} from "./noticias/noticias.component";
import {RequerimientosComponent} from './requerimientos/requerimientos.component';
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {ContenidoComponent} from './contenido/contenido.component';
import {LenguajesComponent} from './lenguajes/lenguajes.component';
import {FrameworksComponent} from './frameworks/frameworks.component';
import {ProyectosComponent} from './proyectos/proyectos.component';
import {InstructorComponent} from './instructor/instructor.component';
import {ResenasComponent} from './resenas/resenas.component';
import {BlogComponent} from './blog/blog.component';
import {ContactoComponent} from './contacto/contacto.component';
import {LoginComponent} from './login/login.component';
import {Aula1Component} from './aula1/aula1.component';
import {Aula2Component} from './aula2/aula2.component';

@NgModule({
  declarations: [
    ContenidoCentralComponent,
    FraseComponent,
    NoticiasComponent,
    RequerimientosComponent,
    ContenidoComponent,
    LenguajesComponent,
    FrameworksComponent,
    ProyectosComponent,
    InstructorComponent,
    ResenasComponent,
    BlogComponent,
    ContactoComponent,
    LoginComponent,
    Aula1Component,
    Aula2Component
  ],
  exports: [
    ContenidoCentralComponent,
    // FraseComponent,
    // NoticiasComponent,
    // RequerimientosComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContenidoCentralModule {
}
