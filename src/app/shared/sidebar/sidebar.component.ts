import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray, Validators, FormControl} from "@angular/forms";
import {Observable, Subject, takeUntil} from "rxjs";
import {CoreService} from "../../services/core.service";
import {DynamicForm} from "../../models/core.model";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  public dynamicForms: DynamicForm[] = [];

  constructor(private fb: FormBuilder, private coreService: CoreService) {
    //this.dynamicForms = this.coreService.forms;

    this.coreService.getdynamicForms().pipe(takeUntil(this.unsubscribe)).subscribe( resp => {
      this.dynamicForms = resp;
    });
  }


  ngOnInit() {
  }

  login(formGroup: FormGroup) {
    const {nombre, password} = formGroup.value;
    console.log(nombre, password)
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
