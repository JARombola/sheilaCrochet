import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})
// tslint:disable:max-line-length
export class RepoProductosService {

  productosList: Producto[];

  constructor() {
    this.productosList = [];
    this.productosList.push(this.cardiganAnna());
    this.productosList.push(this.comboPrimaveraVerano());
    this.productosList.push(this.cursoPrincipiantes());
    this.productosList.push(this.sweaterMariela());
    this.productosList.push(this.chaquetaGladys());
    this.productosList.push(this.musculosaHaydePDF());
    this.productosList.push(this.musculosaHaydeVideo());
  }

  public getProduct(nombre: string): Producto {
    return this.productosList.find(product => product.nombre === nombre);
  }

  getNovedades(cantidad: number): Producto[] {
    return this.productosList.slice(-cantidad).reverse();
  }

  private cardiganAnna(): Producto {
    const producto = new Producto();
    producto.nombre = 'Cárdigan Anna';
    producto.descripcionCorta = 'Cárdigan con textura constante pero simple de hacer. Vas a amar el proceso de tejido tanto como el resultado.';
    producto.descripcionLarga = 'En el curso te enseño cómo adaptar el Cárdigan a todos tus gusto: si lo querés más largo, más corto, si querés tan sólo la espalda más larga. Además te explico dos diseños de mangas! También te enseño cómo adaptarlo a  cualquier hilado.';
    producto.detalles = 'Incluye acceso a clases de consulta vía mail.\n' +
    'Las clases ya están grabadas: podes verlas CUANDO quieras y LAS VECES que quieras.';
    producto.precio = 800;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-78d992ba-2ee5-4de0-a681-528ea6e4399e';
    producto.imagenPortada = 'cardiganAnna/cardiganAnnaMin.jpg';
    producto.imagenesUrl = ['cardiganAnna/cardiganAnna.jpg'];
    return producto;
  }

  private comboPrimaveraVerano(): Producto {
    const producto = new Producto();
    producto.nombre = 'Combo Primavera/Verano';
    producto.descripcionCorta = 'Dos increíbles prendas que no pueden faltar entre las de primavera/verano.';
    producto.descripcionLarga = 'La Chaqueta Gladys es ideal para los cambios de estación, va a ser tu aliada en la primavera. Y la Musculosa Haydeé es SÚPER fresca para el verano. La mejor combinación para pasar estas estaciones!';
    producto.detalles = 'Guía explicativa PDF chaqueta gladys + Guía explicativa PDF musculosa haydeé.\n (No incluye videos).';
    producto.precio = 606;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-d7698859-6fc0-47db-99b2-888c23cf15d6';
    producto.imagenPortada = 'primaveraVerano/adm-primaveraVeranoMin.jpg';
    producto.imagenesUrl = ['primaveraVerano/adm-primaveraVerano.jpg'];
    return producto;
  }

  private cursoPrincipiantes(): Producto {
    const producto = new Producto();
    producto.nombre = 'Curso Crochet (Principiantes)';
    producto.descripcionCorta = '¿Nunca tejiste?  ¿Querés convertirte en toda  una crochetera? ¡Esta es tú oportunidad!';
    producto.descripcionLarga = 'Curso para aquellas que nunca tejieron y quieren aprender. Se realizan 5 proyectos en los que vas a aprender los puntos básicos y formas básicas. Aprenderás “la base del crochet” y estarás lista para seguir aprendiendo más de esta bella técnica.';
    producto.detalles = 'Incluye acceso a clases de consulta vía mail.\n Las clases ya están grabadas: podés verlas CUÁNDO quieras y LAS VECES que quieras.';
    producto.precio = 800;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-40bd7cb0-21b2-4353-9d04-c8dc6f9f04cc';
    producto.imagenPortada = 'cursoPrincipiantes/adm-cursoPrincipiantesMin.png';
    producto.imagenesUrl = ['cursoPrincipiantes/adm-cursoPrincipiantes.png'];
    return producto;
  }

  private sweaterMariela(): Producto {
    const producto = new Producto();
    producto.nombre = 'Sweater Mariela';
    producto.descripcionCorta = 'Sweater súper práctico y cómodo que vas a amar desde el primer instante.';
    producto.descripcionLarga = 'Te enseño a hacer el sweater a tu gusto! Vas a aprender a adaptarlo a cualquier talle y preferencia: más al cuerpo, más ancho, mangas anchas, mangas más angostas. Te enseño el paso a paso pero también te doy el espacio para que dejes volar tu creatividad! Además vas a poder adaptarlo a cualquier hilado.';
    producto.detalles = 'Incluye acceso a clases de consulta vía mail.\n Las clases ya están grabadas: podés verlas CUÁNDO quieras y LAS VECES que quieras.';
    producto.precio = 800;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-9f248b70-59e0-406c-a1a3-8046b9fdb236';
    producto.imagenPortada = 'sweaterMariela/adm-sweaterMarielaMin.png';
    producto.imagenesUrl = ['sweaterMariela/adm-sweaterMariela.png'];
    return producto;
  }

  private chaquetaGladys(): Producto {
    const producto = new Producto();
    producto.nombre = 'Chaqueta Gladys (PDF)';
    producto.descripcionCorta = '';
    producto.descripcionLarga = '';
    producto.detalles = '';
    producto.precio = 0;
    producto.urlMP = '';
    producto.imagenPortada = 'chaquetaGladys/adm-chaquetaGladysMin.jpg';
    producto.imagenesUrl = ['chaquetaGladys/adm-chaquetaGladys.jpg'];
    return producto;
  }

  private musculosaHaydePDF(): Producto {
    const producto = new Producto();
    producto.nombre = 'Musculosa Haydeé (PDF)';
    producto.descripcionCorta = 'Prenda fresca que vas a amar. Además es SÚPER FÁCIL de hacer. Ideal para tejer como primer prenda.';
    producto.descripcionLarga = 'Esta musculosa es ideal para vos si nunca tejiste ninguna prenda. Es súper práctica y fácil de hacer. Además es muy cómoda y te enseño a adaptarla a cualquier talle e hilado. \nTambién incluye tabla de talles para que, si no querés sacar cuentas, vayas siguiendo mis instrucciones para poder tejerla.';
    producto.detalles = 'PDF Explicativo: Paso a paso para adaptar la prenda a cualquier talle e hilado.\nExplicación para realizarla en 5 talles.\n(No contiene videos).';
    producto.precio = 356;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-67af5d07-b46a-4284-af5f-41756e001947';
    producto.imagenPortada = 'musculosaHaydee/adm-musculosaHaydeeMin.jpg';
    producto.imagenesUrl = ['musculosaHaydee/adm-musculosaHaydee.jpg'];
    return producto;
  }
  private musculosaHaydeVideo(): Producto {
    const producto = new Producto();
    producto.nombre = 'Musculosa Haydeé (PDF + Videos)';
    producto.descripcionCorta = 'Prenda fresca que vas a amar. Además es SÚPER FÁCIL de hacer. Ideal para tejer como primer prenda.';
    producto.descripcionLarga = 'Esta musculosa es ideal para vos si nunca tejiste ninguna prenda. Es súper práctica y fácil de hacer. Además es muy cómoda y te enseño a adaptarla a cualquier talle e hilado. \nTambién incluye tabla de talles para que, si no querés sacar cuentas, vayas siguiendo mis instrucciones para poder tejerla.';
    producto.detalles = 'PDF Explicativo: Paso a paso para adaptar la prenda a cualquier talle e hilado.\nExplicación para realizarla en 5 talles.\nINCLUYE VIDEOS EXPLICATIVOS.';
    producto.precio = 500;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-eb1d52b3-15fc-41fd-8cf5-057d9c4bbd9c';
    producto.imagenPortada = 'musculosaHaydee/adm-musculosaHaydeeMin.jpg';
    producto.imagenesUrl = ['musculosaHaydee/adm-musculosaHaydee.jpg'];
    return producto;
  }

}
