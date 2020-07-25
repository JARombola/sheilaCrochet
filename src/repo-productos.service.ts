import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
export class RepoProductosService {
  productosList: Producto[];

  constructor() {
    this.productosList = [];
    this.productosList.push(this.bufanda1());
    this.productosList.push(this.guantes());
    this.productosList.push(this.empanadas());
  }

  private bufanda1() {
    const prod = new Producto();
    prod.nombre = 'Bufanda Roja';
    prod.descripcionCorta = 'Hermosa bufanda roja';
    prod.descripcionLarga = 'Hermosa bufanda roja ideal para el verano donde hace mucho calor';
    prod.detalles = 'Disponible en todos los colores menos rojo';
    prod.id = this.productosList.length + 1;
    prod.precio = 1000;
    prod.urlImagen = 'https://mdbootstrap.com/img/Photos/Others/images/16.jpg';
    prod.urlMP = 'https://google.com.ar';
    return prod;
  }

  private guantes() {
    const prod = new Producto();
    prod.nombre = 'Guante verde';
    prod.descripcionCorta = 'Hermoso guante verde';
    prod.descripcionLarga = 'Hermoso guante verde ideal para la primavera';
    prod.detalles = 'Viene en color rojo (incluye un sólo guante)';
    prod.id = this.productosList.length + 1;
    prod.precio = 500;
    prod.urlImagen = 'https://mdbootstrap.com/img/Photos/Others/images/14.jpg';
    prod.urlMP = 'https://google.com.ar';
    return prod;
  }

  private empanadas() {
    const prod = new Producto();
    prod.nombre = 'Empanadas';
    prod.descripcionCorta = 'Deliciosa empanada de jamón y queso';
    prod.descripcionLarga = 'Deliciosa empanada de jamón y queso fría';
    prod.detalles = 'La empanada NO incluye jamón';
    prod.id = this.productosList.length + 1;
    prod.precio = 20;
    prod.urlImagen = 'https://mdbootstrap.com/img/Photos/Others/images/15.jpg';
    prod.urlMP = 'https://google.com.ar';
    return prod;
  }

  public getProduct(id: number) {
    return this.productosList.find(product => product.id === id);
  }
}
