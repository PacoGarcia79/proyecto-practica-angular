import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FooterComponent} from "./footer/footer.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FooterComponent, NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [NavbarComponent, SidebarComponent, FooterComponent]
})
export class SharedModule { }
