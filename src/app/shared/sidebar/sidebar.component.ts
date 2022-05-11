import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import {Observable, Subject, takeUntil} from "rxjs";
import {Router} from "@angular/router";
import {DynamicForm, Link} from "../../models/core.model";

import {SidebarService} from "../../services/sidebar.service";


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  public dynamicForms: DynamicForm[] = [];
  public enlaces: Link[] = [];

  constructor(private fb: FormBuilder, private sidebarService: SidebarService, private router: Router) {
  }


  ngOnInit() {
    this.sidebarService.getdynamicForms().pipe(takeUntil(this.unsubscribe)).subscribe( resp => {
      this.dynamicForms = resp;
    });

    this.sidebarService.getEnlaces().pipe(takeUntil(this.unsubscribe)).subscribe( resp => {
      this.enlaces = resp;
    });
  }

  login(formGroup: FormGroup, formId: String) {
    const {nombre, password} = formGroup.value;
    console.log(nombre, password)

    this.router.navigate([`/${formId}`])
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
