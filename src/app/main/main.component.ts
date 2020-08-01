import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, zoomInOnEnterAnimation, fadeInRightOnEnterAnimation } from 'angular-animations';
import { Producto } from 'src/producto';
import { RepoProductosService } from 'src/repo-productos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    zoomInOnEnterAnimation(),
    fadeInRightOnEnterAnimation({translate: '20%'}),
  ]
})
export class MainComponent implements OnInit {
  urlImagenes = 'assets/';
  productos: Producto[];

  constructor(private prodService: RepoProductosService) {
   }

  ngOnInit() {
    this.productos = this.prodService.getNovedades(4);
  }


}
