import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';
import { Producto } from 'src/producto';
import { RepoProductosService } from 'src/repo-productos.service';
import { environment } from 'src/environments/environment';

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
  mantenimiento: boolean;

  urlImagenes = 'assets/';

  constructor(private productosService: RepoProductosService) {
    this.mantenimiento = environment.mantenimiento;
  }

  ngOnInit() {
    this.productos = this.productosService.productosList;
  }

}
