import { Component, OnInit, AfterViewInit } from '@angular/core';
import { fadeInLeftOnEnterAnimation, swingAnimation} from 'angular-animations';
import { Producto } from 'src/producto';
import { RepoProductosService } from 'src/repo-productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  animations: [
    fadeInLeftOnEnterAnimation({translate: '50px' }),
    swingAnimation(),
  ]
})
export class ProductDetailsComponent implements OnInit {
  producto: Producto;
  urlImagenes = 'assets/';

  constructor(private productos: RepoProductosService, private route: ActivatedRoute) { }

  ngOnInit() {
    const nombreProducto = this.route.snapshot.paramMap.get('id');
    this.producto = this.productos.getProduct(nombreProducto);
  }
}

