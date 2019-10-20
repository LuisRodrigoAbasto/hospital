import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line: import-blacklist
import { Observable, pipe, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {
  subcription: Subscription;
  constructor() {
    this.subcription = this.regresaObservable()
      .subscribe(
        numero => console.log('Subs ', numero),
        error => console.error('Error en el Obs( 2 veces)', error),
        () => console.log('el Observador Termino')
      );
  }

  ngOnInit() {
  }
  ngOnDestroy() {
this.subcription.unsubscribe();
  }
  regresaObservable(): Observable<any> {
    return new Observable(observer => {
      let contador = 0;
      let intervalo = setInterval(() => {
        contador += 1;
        let salida = {
          valor: contador
        };
        observer.next(salida);
        // if (contador === 3) {
        //   clearInterval(intervalo);
        //   observer.complete();
        // }
        // if (contador === 2) {
        //   observer.error('Auxilio');
        // }
      }, 500);
    }).pipe(retry(2))
      .pipe(map((resp: any) => {
        return resp.valor;
      }))
      .pipe(filter((valor, index) => {
        if ((valor % 2) === 1) {
          return true;
        }
        else {
          return false;
        }
      }));
  }
}
