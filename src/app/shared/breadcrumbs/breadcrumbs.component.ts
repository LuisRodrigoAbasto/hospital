import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
// import { filter } from 'minimatch';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {
  label: string = '';
  constructor(private router: Router,
    public title: Title,
    public meta: Meta) {
    this.getDataRoute()
      .subscribe(data => {
        console.log(data);
        this.label = data.titulo;
        this.title.setTitle(this.label);
        let metaTag: MetaDefinition = {
          name: 'description',
          content: this.label
        };
        this.meta.updateTag(metaTag);
      });

  }
  getDataRoute() {
    return this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd)
      // filter((evento: ActivationEnd) => evento.snapshot === null)
      // .map((evento: ActivationEnd) => evento.snapshot.data)
    ).
      pipe(
        filter((evento: ActivationEnd) => evento.snapshot.firstChild === null))
      .pipe(
        map((evento: ActivationEnd) => evento.snapshot.data)
      );
  }

  ngOnInit() {
  }

}
