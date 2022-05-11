import {Injectable} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ButtonType, DynamicForm, Field, Link} from "../models/core.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  public controlsConfig = {
    nombre: ['', Validators.required],
    password: ['', Validators.required]
  }

  public fieldsArray: Field[] = [
    {
      label: 'Usuario',
      type: 'text', formControlName: 'nombre'
    },
    {
      label: 'Contraseña',
      type: 'text', formControlName: 'password'
    }
  ];

  public boton: ButtonType = {
    value: 'Entrar',
    type: 'submit'
  }

  public formLinks: Link[] = [
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
  ]

  public forms: DynamicForm[] = [
    {
      title: 'Entrar a la web',
      id: 'login',
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

  getdynamicForms(): Observable<DynamicForm[]> {
    return of(this.forms);
  }
}
