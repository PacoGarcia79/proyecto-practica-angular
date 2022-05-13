import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {ContenidoCentralComponent} from "./contenido-central/contenido-central.component";
import {NoticiasComponent} from "./contenido-central/noticias/noticias.component";
import {RequerimientosComponent} from "./contenido-central/requerimientos/requerimientos.component";
import {ContenidoComponent} from "./contenido-central/contenido/contenido.component";
import {LenguajesComponent} from "./contenido-central/lenguajes/lenguajes.component";
import {FrameworksComponent} from "./contenido-central/frameworks/frameworks.component";
import {ProyectosComponent} from "./contenido-central/proyectos/proyectos.component";
import {InstructorComponent} from "./contenido-central/instructor/instructor.component";
import {ResenasComponent} from "./contenido-central/resenas/resenas.component";
import {BlogComponent} from "./contenido-central/blog/blog.component";
import {ContactoComponent} from "./contenido-central/contacto/contacto.component";
import {PersonalComponent} from "./contenido-central/personal/personal.component";
import {Aula1Component} from "./contenido-central/aula1/aula1.component";
import {Aula2Component} from "./contenido-central/aula2/aula2.component";
import {HtmlComponent} from "./contenido-central/html/html.component";
import {CssComponent} from "./contenido-central/css/css.component";
import {SassComponent} from "./contenido-central/sass/sass.component";
import {BootstrapComponent} from "./contenido-central/bootstrap/bootstrap.component";
import {AuthGuard} from "./services/auth.guard";

const routes: Routes = [
  {
    path: '',
    component: ContenidoCentralComponent,
    children: [
      {path: '', component: NoticiasComponent},
      {path: 'requerimientos', component: RequerimientosComponent},
      {path: 'contenido', component: ContenidoComponent},
      {path: 'lenguajes', component: LenguajesComponent},
      {path: 'html', component: HtmlComponent},
      {path: 'css', component: CssComponent},
      {path: 'frameworks', component: FrameworksComponent},
      {path: 'sass', component: SassComponent},
      {path: 'bootstrap', component: BootstrapComponent},
      {path: 'proyectos', component: ProyectosComponent},
      {path: 'instructor', component: InstructorComponent},
      {path: 'resenas', component: ResenasComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'contacto', component: ContactoComponent},
      {path: 'aula1', component: Aula1Component, canActivate: [AuthGuard]},
      {path: 'aula2', component: Aula2Component, canActivate: [AuthGuard]},
      {path: 'personal', component: PersonalComponent, canActivate: [AuthGuard]}
    ]
  },
  {path: '**', redirectTo: ''},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
