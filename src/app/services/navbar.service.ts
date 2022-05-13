import { Injectable } from '@angular/core';
import {Link, NavbarLink, NoticiaBlock} from "../models/core.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  private navbarLinks: NavbarLink[] = [
    {
      link: {
        text: 'Inicio',
        route: '#'
      },
      hasSubLinks: false
    },
    {
      link: {
        text: 'Contenido',
        route: '/contenido'
      },
      hasSubLinks: false
    },
    {
      link: {
        text: 'Requerimientos',
        route: '/requerimientos'
      },
      hasSubLinks: false
    },
    {
      link: {
        text: 'Lenguajes',
        route: '/lenguajes'
      },
      hasSubLinks: true,
      subLinks: [
        {
          text: 'HTML',
          route: '/html'
        },
        {
          text: 'CSS',
          route: '/css'
        },
      ]
    },
    {
      link: {
        text: 'Frameworks',
        route: '/frameworks'
      },
      hasSubLinks: true,
      subLinks: [
        {
          text: 'SASS',
          route: '/sass'
        },
        {
          text: 'Bootstrap',
          route: '/bootstrap'
        },
      ]
    },
    {
      link: {
        text: 'Proyectos',
        route: '/proyectos'
      },
      hasSubLinks: false
    },
    {
      link: {
        text: 'El instructor',
        route: '/instructor'
      },
      hasSubLinks: false
    },
    {
      link: {
        text: 'Reseñas',
        route: '/resenas'
      },
      hasSubLinks: false
    },
    {
      link: {
        text: 'Blog',
        route: '/blog'
      },
      hasSubLinks: false
    },
    {
      link: {
        text: 'Contacto',
        route: '/contacto'
      },
      hasSubLinks: false
    }
  ];

  constructor() { }

  getLinksNavbar(): Observable<NavbarLink[]> {
    return of(this.navbarLinks);
  }
}
