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


