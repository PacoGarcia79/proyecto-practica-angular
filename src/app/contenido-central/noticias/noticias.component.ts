import {Component, OnDestroy, OnInit} from '@angular/core';
import {NoticiasService} from "../../services/noticias.service";
import {DynamicForm, Noticia, NoticiaBlock} from "../../models/core.model";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();

  public bloqueNoticias: NoticiaBlock[] = [];

  constructor(public noticiasService: NoticiasService) {

  }

  ngOnInit(): void {
    this.noticiasService.getBloquesNoticias().pipe(takeUntil(this.unsubscribe)).subscribe( resp => {
      this.bloqueNoticias = resp;
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
