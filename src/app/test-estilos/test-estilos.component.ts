import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, fadeInRightOnEnterAnimation, zoomInOnEnterAnimation } from 'angular-animations';
import { Producto } from 'src/producto';
import { RepoProductosService } from 'src/repo-productos.service';

@Component({
  selector: 'app-test-estilos',
  templateUrl: './test-estilos.component.html',
  styleUrls: ['./test-estilos.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    zoomInOnEnterAnimation(),
    fadeInRightOnEnterAnimation({translate: '20%'}),
  ]
})
export class TestEstilosComponent implements OnInit {
  urlImagenes = 'assets/';
  productos: Producto[];
  fondo: string;
  botones = 'blue darken-3';
  top = 'navbar navbar-expand-lg navbar-dark secondary-color';
  bot = 'font-small pink';
  fondoAux: string;
  botonesAux: string;
  topAux: string;
  botAux: string;

  constructor(private prodService: RepoProductosService) {
   }

  ngOnInit() {
    this.productos = this.prodService.getNovedades(4);
    const f = document.getElementsByClassName('font-small')[0] as HTMLElement;
    f.style.display = 'none';

  }

  cambiarColores() {
    if (!!this.fondoAux) this.fondo = this.fondoAux;
    if (!!this.botonesAux) this.botones = this.botonesAux;
    if (!!this.botAux) this.bot = 'font-small ' + this.botAux;
    if (!!this.topAux) this.top = 'navbar navbar-expand-lg navbar-dark ' + this.topAux;
  }

  originales() { 
    this.fondo = 'pink lighten-4';
    this.bot = 'font-small pink';
    this.top = 'navbar navbar-expand-lg navbar-dark secondary-color';
  }

}
