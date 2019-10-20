import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
// import { filter } from 'minimatch';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(evento => evento instanceof ActivationEnd)
      // filter((evento: ActivationEnd) => evento.snapshot === null)
      // .map((evento: ActivationEnd) => evento.snapshot.data)
    ).
      pipe(
        filter((evento: ActivationEnd) => evento.snapshot === null))
      .pipe(
        map((evento: ActivationEnd) => evento.snapshot.data)
      )
      .subscribe(event => {
        // filter((evento => evento instanceof ActivationEnd)
        // filter((evento: ActivationEnd) => evento.snapshot.firstChild === null)
        console.log(event);
      });
    // console.log(this.router.events.subscribe(event => {
    //   // console.log(event);
    //   event.filter((evento: RouterEvent) => evento instanceof ActivationEnd)
    // }));
    // console.log(event);
  }

  ngOnInit() {
  }

}
