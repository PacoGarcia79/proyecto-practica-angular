import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ButtonType, DynamicForm, Field, Link} from "../models/core.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  private controlsConfig = {
    email: ['', Validators.required],
    password: ['', Validators.required]
  }

  private fieldsArray: Field[] = [
    {
      label: 'Email',
      type: 'text', formControlName: 'email'
    },
    {
      label: 'Contraseña',
      type: 'text', formControlName: 'password'
    }
  ];

  private boton: ButtonType = {
    value: 'Entrar',
    type: 'submit'
  }

  private formLinks: Link[] = [
    {
      route: '#',
      text: 'Zona de alumnos'
    },
    {
      route: '#',
      text: 'Zona del profesor'
    },
    {
      route: '#',
      text: 'Acceso a calificaciones'
    }
  ];

  private enlaces: Link[] = [
    {
      route: '#',
      text: 'Máster en JavaScript'
    },
    {
      route: '#',
      text: 'Máster en PHP'
    },
    {
      route: '#',
      text: 'Máster en webs full-stack'
    },
    {
      route: '#',
      text: 'Curso de Git'
    }
  ];

  private forms: DynamicForm[] = [
    {
      title: 'Área personal',
      id: 'personal',
      hasButton: true,
      button: this.boton,
      formName: this.fb.group(this.controlsConfig),
      fields: this.fieldsArray,
      hasLinks: true,
      formLinks: this.formLinks
    },
    {
      title: 'Aula Virtual 1',
      id: 'aula1',
      class: 'blue',
      hasButton: true,
      button: this.boton,
      formName: this.fb.group(this.controlsConfig),
      fields: this.fieldsArray,
      hasLinks: false
    },
    {
      title: 'Aula Virtual 2',
      id: 'aula2',
      class: 'red',
      hasButton: true,
      button: this.boton,
      formName: this.fb.group(this.controlsConfig),
      fields: this.fieldsArray,
      hasLinks: false
    }
  ];

  constructor(private fb: FormBuilder) {
  }

  getDynamicForms(): Observable<DynamicForm[]> {
    return of(this.forms);
  }

  getEnlaces(): Observable<Link[]> {
    return of(this.enlaces);
  }


}
