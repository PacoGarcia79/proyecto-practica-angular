import {Component, OnDestroy, OnInit} from '@angular/core';

import {NavbarService} from "../../services/navbar.service";
import {NavbarLink} from "../../models/core.model";
import {Subject, takeUntil} from "rxjs";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private unsubscribe : Subject<void> = new Subject();
  navbarLinks: NavbarLink[] = [];

  constructor(public navbarService: NavbarService, private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.navbarService.getLinksNavbar().pipe(takeUntil(this.unsubscribe)).subscribe( resp => {
      this.navbarLinks = resp;
    })
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  logout() {
    this.authService.logout().then( resp => {
      this.router.navigate(['/noticias']);
    });
  }
}
