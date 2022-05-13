import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import {Observable, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {DynamicForm, Link} from "../../models/core.model";

import {SidebarService} from "../../services/sidebar.service";
import {AuthService} from "../../services/auth.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  public dynamicForms: DynamicForm[] = [];
  public enlaces: Link[] = [];

  public registroForm: FormGroup;

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private router: Router,
              public authService: AuthService) {
    this.registroForm = fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  ngOnInit() {
    this.sidebarService.getDynamicForms().pipe(takeUntil(this.unsubscribe)).subscribe(resp => {
      this.dynamicForms = resp;
    });

    this.sidebarService.getEnlaces().pipe(takeUntil(this.unsubscribe)).subscribe(resp => {
      this.enlaces = resp;
    });
  }

  login(formGroup: FormGroup, formId: String) {
    if (formGroup.invalid) {
      return;
    }

    const {email, password} = formGroup.value;
    console.log(email, password)

    this.authService.loginUsuario(email, password).then(credenciales =>{
      console.log(credenciales)
      this.router.navigate([`/${formId}`])
    });

  }

  registrar() {
    if (this.registroForm.invalid) {
      return;
    }

    const {nombre, email, password} = this.registroForm.value;

    this.authService.crearUsuario(nombre, email, password).then(credenciales => {
      console.log(credenciales)
      this.router.navigate(['/personal'])
    })
      .catch(err => console.error(err));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
