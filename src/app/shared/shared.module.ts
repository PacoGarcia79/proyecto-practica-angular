import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {FooterComponent} from "./footer/footer.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from "./navbar/navbar.component";


@NgModule({
  declarations: [FooterComponent, SidebarComponent, NavbarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [SidebarComponent, FooterComponent, NavbarComponent]
})
export class SharedModule { }
