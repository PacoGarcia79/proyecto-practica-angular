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
import {PersonalComponent} from './personal/personal.component';
import {Aula1Component} from './aula1/aula1.component';
import {Aula2Component} from './aula2/aula2.component';
import { HtmlComponent } from './html/html.component';
import { CssComponent } from './css/css.component';
import { SassComponent } from './sass/sass.component';
import { BootstrapComponent } from './bootstrap/bootstrap.component';

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
    PersonalComponent,
    Aula1Component,
    Aula2Component,
    HtmlComponent,
    CssComponent,
    SassComponent,
    BootstrapComponent
  ],
  exports: [
    ContenidoCentralComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContenidoCentralModule {
}
