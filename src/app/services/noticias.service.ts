import {Injectable} from '@angular/core';
import {Noticia, NoticiaBlock} from "../models/core.model";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  private noticiasFront: Noticia[] = [
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    }
  ];

  private noticiasBack: Noticia[] = [
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    }
  ];

  private noticiasInstructor: Noticia[] = [
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    },
    {
      titulo: 'Título de la entrada',
      texto: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ' +
        'Lorem Ipsum has been the industry standard dummy',
      fecha: '[20-12-2020. Victor Robles Web]',
      link: '#'
    }
  ];

  private bloquesNoticias: NoticiaBlock[] = [
    {
      id: 'frontend',
      class: 'titulo',
      titulo: 'Noticias de front-end',
      noticias: this.noticiasFront
    },
    {
      id: 'backend',
      class: 'titulo red',
      titulo: 'Noticias de back-end',
      noticias: this.noticiasBack
    },
    {
      id: 'instructor',
      class: 'titulo orange',
      titulo: 'Noticias del instructor',
      noticias: this.noticiasInstructor
    }
  ]

  constructor() {
  }

  getBloquesNoticias(): Observable<NoticiaBlock[]> {
    return of(this.bloquesNoticias);
  }
}
