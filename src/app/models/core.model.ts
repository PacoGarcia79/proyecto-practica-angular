import {FormGroup} from "@angular/forms";

export interface DynamicForm {
  title: string;
  id: string;
  class?: string;
  formName: FormGroup;
  hasButton?: boolean;
  button?: ButtonType;
  fields?: Field[];
  hasLinks?: boolean;
  formLinks?: Link[];
}

export interface Field{
  label: string;
  type: string;
  formControlName: string;
}

export interface ButtonType{
  value: string;
  type: string;
}

export interface Link{
  route: string;
  text: string;
}

export interface NavbarLink{
  link: Link;
  hasSubLinks?: boolean;
  subLinks?: Link[];
}

export interface Noticia{
  titulo: string;
  texto: string;
  fecha: string;
  link: string;
}

export interface NoticiaBlock{
  id: string;
  class: string;
  titulo: string;
  noticias: Noticia[];
}

// export interface Usuario{
//   uid: string;
//   nombre: string;
//   email: string;
// }

export class Usuario{
  constructor(
    public uid: string,
    public nombre: string,
    public email: string,
  ){}
}
