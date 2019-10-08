import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-graficas1',
  templateUrl: './graficas1.component.html',
  styles: []
})
export class Graficas1Component implements OnInit {

  graficos: any = {
      grafico1: {
      labels : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      data : [350, 450, 100],
      type: 'doughnut',
      leyenda : 'el Pan se Come con'
    },
    grafico2: {
      labels : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      data : [350, 450, 100],
      type: 'doughnut',
      leyenda : 'el Pan se Come con'
    },
    grafico3: {
      labels : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      data : [350, 450, 100],
      type: 'doughnut',
      leyenda : 'el Pan se Come con'
    },
    grafico4: {
      labels : ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'],
      data : [350, 450, 100],
      type: 'doughnut',
      leyenda : 'el Pan se Come con'
    }
  };
  constructor() { }

  ngOnInit() {
  }

}
