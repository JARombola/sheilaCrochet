import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Producto } from 'src/producto';
import { RepoProductosService } from 'src/repo-productos.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
  ]
})
export class ShopComponent implements OnInit {
  productos: Producto[];
  urlImagenes = 'assets/';
  constructor(private productosService: RepoProductosService) { }

  ngOnInit() {
    this.productos = this.productosService.productosList;
  }

}
