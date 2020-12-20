import { Injectable } from '@angular/core';
import { Producto } from './producto';

@Injectable({
  providedIn: 'root'
})

/*
IMAGENES MIN: 500 x 350
IMAGENES DETALLES: 650 x 650
*/
// tslint:disable:max-line-length
export class RepoProductosService {

  productosList: Producto[];

  constructor() {
    this.productosList = [];
    this.productosList.push(this.cardiganAnna());
    this.productosList.push(this.comboPrimaveraVerano());
    this.productosList.push(this.cursoPrincipiantes());
    this.productosList.push(this.sweaterMariela());
    this.productosList.push(this.musculosaHaydeePDF());
    this.productosList.push(this.musculosaHaydeeVideo());
    this.productosList.push(this.chaquetaGladysPDF());
    this.productosList.push(this.chaquetaGladysVideo());
    this.productosList.push(this.claseMateCorazon());
    this.productosList.push(this.cursoChalecoSheila());
    this.productosList.push(this.sweaterDora());
    this.productosList.push(this.remeraGraciela());
    this.productosList.push(this.musculosaAndrea());
    this.productosList.push(this.remeraDora());
    this.productosList.push(this.comboDora());
    // Gratis
    this.productosList.push(this.mandalas());
    this.productosList.push(this.musculosaFlor());
    this.productosList.push(this.posavasosYute());
    this.productosList.push(this.fundaEbook());
  }

  public getProduct(nombre: string): Producto {
    return this.productosList.find(product => product.nombre === nombre);
  }

  getNovedades(cantidad: number): Producto[] {
    let novedades = this.productosList.filter(p => p.precio > 0).slice( -(cantidad - 1)).reverse();
    novedades = novedades.concat(this.productosList.filter(p => p.precio <= 0).slice(-1)).reverse();
    return novedades;
  }

  private cardiganAnna(): Producto {
    const producto = new Producto();
    producto.nombre = 'Cárdigan Anna';
    producto.descripcionCorta = 'Cárdigan con textura constante pero simple de hacer. Vas a amar el proceso de tejido tanto como el resultado.';
    producto.descripcionLarga = 'En el curso te enseño cómo adaptar el Cárdigan a todos tus gusto: si lo querés más largo, más corto, si querés tan sólo la espalda más larga. Además te explico dos diseños de mangas! También te enseño cómo adaptarlo a  cualquier hilado.';
    producto.detalles = 'Incluye acceso a clases de consulta vía mail.\n' +
    'Las clases ya están grabadas: podes verlas CUANDO quieras y LAS VECES que quieras.';
    producto.precio = 917;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-78d992ba-2ee5-4de0-a681-528ea6e4399e';
    producto.imagenPortada = 'cardiganAnna/cardiganAnnaMin.jpg';
    producto.imagenesUrl = ['cardiganAnna/cardiganAnna1.jpg', 'cardiganAnna/cardiganAnna2.jpg', 'cardiganAnna/cardiganAnna3.jpg'];
    producto.conocimientos = 'Saber contar puntos, vueltas y realizar puntos básicos (vareta, media vareta, medio punto, punto deslizado). Igualmente en el curso te doy una explicación breve de estos puntos pero no aplica como práctica de los mismos.';
    return producto;
  }

  private comboPrimaveraVerano(): Producto {
    const producto = new Producto();
    producto.nombre = 'Combo Primavera/Verano';
    producto.descripcionCorta = 'Dos increíbles prendas que no pueden faltar entre las de primavera/verano.';
    producto.descripcionLarga = 'La Chaqueta Gladys es ideal para los cambios de estación, va a ser tu aliada en la primavera. Y la Musculosa Haydeé es SÚPER fresca para el verano. La mejor combinación para pasar estas estaciones!';
    producto.detalles = 'Guía explicativa PDF chaqueta gladys + Guía explicativa PDF musculosa haydeé.\n (No incluye videos).';
    producto.precio = 827;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-d7698859-6fc0-47db-99b2-888c23cf15d6';
    producto.imagenPortada = 'primaveraVerano/adm-primaveraVeranoMin.jpg';
    producto.imagenesUrl = ['primaveraVerano/adm-primaveraVerano.jpg'];
    producto.conocimientos = 'Saber contar puntos, vueltas y realizar puntos básicos (vareta, media vareta, medio punto, punto deslizado) y saber leer gráficos.';
    return producto;
  }

  private cursoPrincipiantes(): Producto {
    const producto = new Producto();
    producto.nombre = 'Curso Crochet (Principiantes)';
    producto.descripcionCorta = '¿Nunca tejiste?  ¿Querés convertirte en toda  una crochetera? ¡Esta es tú oportunidad!';
    producto.descripcionLarga = 'Curso para aquellas que nunca tejieron y quieren aprender. Se realizan 5 proyectos en los que vas a aprender los puntos básicos y formas básicas. Aprenderás “la base del crochet” y estarás lista para seguir aprendiendo más de esta bella técnica.';
    producto.detalles = 'Incluye acceso a clases de consulta vía mail.\nLas clases ya están grabadas: podés verlas CUÁNDO quieras y LAS VECES que quieras.\n'
    + 'Además... ¡INCLUYE PROYECTO DE REGALO!';
    producto.precio = 1025;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-40bd7cb0-21b2-4353-9d04-c8dc6f9f04cc';
    producto.imagenPortada = 'cursoPrincipiantes/adm-cursoPrincipiantesMin.png';
    producto.imagenesUrl = ['cursoPrincipiantes/adm-cursoPrincipiantes1.png', 'cursoPrincipiantes/adm-cursoPrincipiantes2.jpg', 'cursoPrincipiantes/adm-cursoPrincipiantes3.jpg',
    'cursoPrincipiantes/adm-cursoPrincipiantes4.jpg', 'cursoPrincipiantes/adm-cursoPrincipiantes5.jpg', 'cursoPrincipiantes/adm-cursoPrincipiantes6.jpg'];
    return producto;
  }

  private sweaterMariela(): Producto {
    const producto = new Producto();
    producto.nombre = 'Sweater Mariela';
    producto.descripcionCorta = 'Sweater súper práctico y cómodo que vas a amar desde el primer instante.';
    producto.descripcionLarga = 'Te enseño a hacer el sweater a tu gusto! Vas a aprender a adaptarlo a cualquier talle y preferencia: más al cuerpo, más ancho, mangas anchas, mangas más angostas. Te enseño el paso a paso pero también te doy el espacio para que dejes volar tu creatividad! Además vas a poder adaptarlo a cualquier hilado.';
    producto.detalles = 'Incluye acceso a clases de consulta vía mail.\n Las clases ya están grabadas: podés verlas CUÁNDO quieras y LAS VECES que quieras.';
    producto.precio = 1025;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-9f248b70-59e0-406c-a1a3-8046b9fdb236';
    producto.imagenPortada = 'sweaterMariela/adm-sweaterMarielaMin.png';
    producto.imagenesUrl = ['sweaterMariela/adm-sweaterMariela1.png', 'sweaterMariela/adm-sweaterMariela2.png', 'sweaterMariela/adm-sweaterMariela3.png'];
    producto.conocimientos = 'Saber contar puntos y vueltas. Realizar puntos básicos (vareta, media vareta, medio punto, punto deslizado). Si bien incluye un gráfico de la muestra principal, no hace falta que lo sepas leer ya que te explico todo en los videos.';
    return producto;
  }

  private musculosaHaydeePDF(): Producto {
    const producto = new Producto();
    producto.nombre = 'Musculosa Haydeé (PDF)';
    producto.descripcionCorta = 'Prenda fresca que vas a amar. Además es SÚPER FÁCIL de hacer. Ideal para tejer como primer prenda.';
    producto.descripcionLarga = 'Esta musculosa es ideal para vos si nunca tejiste ninguna prenda. Es súper práctica y fácil de hacer. Además es muy cómoda y te enseño a adaptarla a cualquier talle e hilado. \nTambién incluye tabla de talles para que, si no querés sacar cuentas, vayas siguiendo mis instrucciones para poder tejerla.';
    producto.detalles = 'PDF Explicativo: Paso a paso para adaptar la prenda a cualquier talle e hilado.\nExplicación para realizarla en 5 talles.\n(No contiene videos).';
    producto.precio = 647;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-67af5d07-b46a-4284-af5f-41756e001947';
    producto.imagenPortada = 'musculosaHaydee/adm-musculosaHaydeeMin.jpg';
    producto.imagenesUrl = ['musculosaHaydee/adm-musculosaHaydee1.png', 'musculosaHaydee/adm-musculosaHaydee2.png', 'musculosaHaydee/adm-musculosaHaydee3.png'];
    producto.conocimientos = 'Saber contar puntos, vueltas y realizar puntos básicos (vareta, media vareta, medio punto, punto deslizado), deberás también saber leer gráficos.';
    return producto;
  }

  private musculosaHaydeeVideo(): Producto {
    const producto = new Producto();
    producto.nombre = 'Musculosa Haydeé (PDF + Videos)';
    producto.descripcionCorta = 'Prenda fresca que vas a amar. Además es SÚPER FÁCIL de hacer. Ideal para tejer como primer prenda.';
    producto.descripcionLarga = 'Esta musculosa es ideal para vos si nunca tejiste ninguna prenda. Es súper práctica y fácil de hacer. Además es muy cómoda y te enseño a adaptarla a cualquier talle e hilado. \nTambién incluye tabla de talles para que, si no querés sacar cuentas, vayas siguiendo mis instrucciones para poder tejerla.';
    producto.detalles = 'PDF Explicativo: Paso a paso para adaptar la prenda a cualquier talle e hilado.\nExplicación para realizarla en 5 talles.\nINCLUYE VIDEOS EXPLICATIVOS.';
    producto.precio = 863;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-eb1d52b3-15fc-41fd-8cf5-057d9c4bbd9c';
    producto.imagenPortada = 'musculosaHaydee/adm-musculosaHaydeeMin.jpg';
    producto.imagenesUrl = ['musculosaHaydee/adm-musculosaHaydee1.png', 'musculosaHaydee/adm-musculosaHaydee2.png', 'musculosaHaydee/adm-musculosaHaydee3.png'];
    producto.conocimientos = 'Saber contar puntos, vueltas y realizar puntos básicos (vareta, media vareta, medio punto, punto deslizado) y saber leer gráficos.';
    return producto;
  }

  private chaquetaGladysPDF(): Producto {
    const producto = new Producto();
    producto.nombre = 'Chaqueta Gladys (PDF)';
    producto.descripcionCorta = 'Prenda ideal para media estación. Además cuenta con una gran ventaja al tejerla... ¡NO LLEVA COSTURAS! ';
    producto.descripcionLarga = 'La Chaqueta Gladys es una prenda que va CON TODO. La podés usar para completar tanto un outfit informal como formal. Es ideal para media estación y es aún más ideal porque… NO LLEVA COSTURA. Se teje en una sola pieza y por eso es súper fácil y práctica.';
    producto.detalles = 'PDF EXPLICATIVO: Paso a paso para adaptar la prenda a cualquier talle e hilado (NO incluye videos).';
    producto.precio = 647;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-74a1a351-2371-472a-a3c7-56c308c57e7c';
    producto.imagenPortada = 'chaquetaGladys/adm-chaquetaGladysMin.jpg';
    producto.imagenesUrl = ['chaquetaGladys/adm-chaquetaGladys1.png', 'chaquetaGladys/adm-chaquetaGladys2.png', 'chaquetaGladys/adm-chaquetaGladys3.png', 'chaquetaGladys/adm-chaquetaGladys4.png'];
    producto.conocimientos = 'Saber contar puntos, vueltas, realizar puntos básicos (vareta, media vareta, medio punto, punto deslizado) y saber leer gráficos.';
    return producto;
  }

  private chaquetaGladysVideo(): Producto {
    const producto = new Producto();
    producto.nombre = 'Chaqueta Gladys (PDF + Videos)';
    producto.descripcionCorta = 'Prenda ideal para media estación. Además cuenta con una gran ventaja al tejerla... ¡NO LLEVA COSTURAS! ';
    producto.descripcionLarga = 'La Chaqueta Gladys es una prenda que va CON TODO. La podés usar para completar tanto un outfit informal como formal. Es ideal para media estación y es aún más ideal porque… NO LLEVA COSTURA. Se teje en una sola pieza y por eso es súper fácil y práctica.';
    producto.detalles = 'PDF EXPLICATIVO: Paso a paso para adaptar la prenda a cualquier talle e hilado.\nINCLUYE VIDEOS.';
    producto.precio = 827;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-b907761e-f776-45fe-a36b-3148d9e19a40';
    producto.imagenPortada = 'chaquetaGladys/adm-chaquetaGladysMin.jpg';
    producto.imagenesUrl = ['chaquetaGladys/adm-chaquetaGladys1.png', 'chaquetaGladys/adm-chaquetaGladys2.png', 'chaquetaGladys/adm-chaquetaGladys3.png', 'chaquetaGladys/adm-chaquetaGladys4.png'];
    producto.conocimientos = 'Saber contar puntos, vueltas y realizar puntos básicos (vareta, media vareta, medio punto, punto deslizado) y saber leer gráficos. Si no sabes leerlos, no te preocupes! Vas a poder guiarse solamente por los videos.';
    return producto;
  }

  private claseMateCorazon(): Producto {
    const producto = new Producto();
    producto.nombre = 'Mate Corazón Algo de Mí (Clase)';
    producto.descripcionCorta = 'Acceso a una clase dónde vas a poder aprender a hacer este Mate Corazón para que el momento de tomar mate se convierta en algo mucho más especial.';
    producto.descripcionLarga = 'Paso a paso en donde vamos a realizar la decoración del Mate Corazón. El momento del mate será mucho más especial y bonito. Y porqué no, crear el tuyo propio, con tus colores y tu estilo. Así, cuando nos volvamos a encontrar cada uno con su mate, vos vas a disfrutar del tuyo personalizado.';
    producto.detalles = 'Videos ya grabados: Podés ver la clase CUANDO QUIERAS Y LAS VECES QUE QUIERAS.\nAcceso a consultas vía mail.';
    producto.precio = 324;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-39ae4649-c639-4b69-a0a7-7d12df023105';
    producto.imagenPortada = 'mateCorazon/adm-mateCorazonMin.jpg';
    producto.imagenesUrl = ['mateCorazon/adm-mateCorazon1.jpg', 'mateCorazon/adm-mateCorazon2.jpg', 'mateCorazon/adm-mateCorazon3.jpg'];
    producto.conocimientos = 'No hace falta que sepas leer gráficos, ya que en los videos te explico todo el paso a paso.';
    return producto;
  }

  private cursoChalecoSheila(): Producto {
    const producto = new Producto();
    producto.nombre = 'Curso chaleco Sheila';
    producto.descripcionCorta = '¿Cuánto hace que no te regalas algo a vos misma? Este chaleco es IDEAL. Vas a poder hacer una prenda que se adapte a vos. En mi caso, mi chaleco se llama Sheila… ¿El tuyo cómo se llamaría?';
    producto.descripcionLarga = 'El Chaleco Sheila es ideal para el invierno y media estación. Los chalecos son muy prácticos porque nos mantienen abrigadas pero de una manera cómoda. Sobre todo para aquellas que no les gusta estar con mucha ropa. Lo podes usar de manera informal con alguna remera de manga largo o de manera formal con una camisa… ¿Cómo lo usarías';
    producto.detalles = 'Paso a paso para adaptar la prenda a cualquier talle e hilado. Las clases son videos ya grabados, que vas a poder ver CUANDO QUIERAS Y LAS VECES QUE QUIERAS.\n.'
    + 'En este curso te enseño a hacer aumentos y disminuciones. De esta manera el chaleco se adapta perfecto a cada parte de tú cuerpo para que puedas sentirte cómoda por completo!';
    producto.precio = 917;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-178c07aa-ac49-4bc0-bc86-8cfdbbd05f6b';
    producto.imagenPortada = 'chalecoSheila/adm-chalecoSheilaMin.jpg';
    producto.imagenesUrl = ['chalecoSheila/adm-chalecoSheila1.jpg', 'chalecoSheila/adm-chalecoSheila2.png', 'chalecoSheila/adm-chalecoSheila3.jpg', 'chalecoSheila/adm-chalecoSheila4.jpg', 'chalecoSheila/adm-chalecoSheila5.jpg'];
    producto.conocimientos = 'Saber contar puntos, vueltas y realizar puntos básicos (vareta, cadena, punto deslizado).';
    return producto;
  }

  private sweaterDora(): Producto {
    const producto = new Producto();
    producto.nombre = 'Sweater Dora';
    producto.descripcionCorta = '¿Querés tejer TU PRIMERA PRENDA? ¿Querés que sea súper fácil y rápido de hacer? Esta es LA MEJOR OPCIÓN.';
    producto.descripcionLarga = 'El Sweater... es simple, sencillo de hacer y súper fácil. Su simpleza y frescura hace que te enamores completamente de él! ¿Lo mejor? LO VAS A TEJER RAPIDÍSIMO Y SIN COSTURAS. ¿Estás lista para que tejamos juntas?';
    producto.detalles = 'Ideal para PRINCIPIANTES del crochet.\n'
    + 'VIDEOS YA FILMADOS: Podés ver las clases CUANDO quieras y LAS VECES que quieras. Se adapta perfecto a tu rutina! Vos decidís tu ritmo de tejido, y yo TE ACOMPAÑO en el proceso.\n'
    + 'No tiene fecha límite!\n'
    + 'Clases de consulta vía mail: A medida que vas tejiendo, podés mandarme tus consultas y despejar dudas.';
    producto.precio = 1025;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-adeba107-2825-49cd-8a3b-069b5eaec402';
    producto.imagenPortada = 'sweaterDora/adm-sweaterDoraMin.jpeg';
    producto.imagenesUrl = ['sweaterDora/adm-sweaterDora1.png', 'sweaterDora/adm-sweaterDora2.jpeg', 'sweaterDora/adm-sweaterDora3.jpeg'];
    producto.conocimientos = 'Conocimientos básicos de crochet y del Punto Vareta';
    return producto;
  }

  private remeraGraciela(): Producto {
    const producto = new Producto();
    producto.nombre = 'Remera Graciela';
    producto.descripcionCorta = '¿Estás preparada para tejer en modo primavera Crochetera? En este Curso te traigo una bella y dulce opción!';
    producto.descripcionLarga = 'Es una remera muy sencilla de realizar, ideal si querés tejer tu primera prenda. Es fresca y MUY cómoda, porque te enseño a adaptarla a tu gusto y talle. Además contas con mi apoyo constante a medida que la vas haciendo. Podés hacerme las preguntas que necesites!';
    producto.detalles = 'GUIA PDF. Vas a encontrar el paso a paso escrito + gráficos.\n'
    + 'VIDEOS YA FILMADOS: Podés ver las clases CUANDO quieras y LAS VECES que quieras. Se adapta perfecto a tu rutina!\n'
    + 'VOS DECIDÍS TU RITMO de tejido, y yo TE ACOMPAÑO en el proceso. No tiene fecha límite.\n'
    + 'CLASES DE CONSULTA VÍA MAIL DE LUNES A VIERNES: A medida que vas tejiendo, podés mandarme mails con tus consultas y despejar dudas.';
    producto.precio = 917;
    producto.urlMP = 'https://www.mercadopago.com.ar/checkout/v1/redirect?pref_id=259278692-9994464c-ad89-4205-9a6f-923bee9a1b01';
    producto.imagenPortada = 'remeraGraciela/adm-remeraGracielaMin.png';
    producto.imagenesUrl = ['remeraGraciela/adm-remeraGraciela1.jpg', 'remeraGraciela/adm-remeraGraciela2.png', 'remeraGraciela/adm-remeraGraciela3.png', 'remeraGraciela/adm-remeraGraciela4.jpg', 'remeraGraciela/adm-remeraGraciela5.jpg'];
    producto.conocimientos = 'Deberás contar con conocimientos mínimos de crochet (sobre todo punto vareta), pero no hace falta ser una experta! Ya que está remera ES SÚPER FÁCIL';
    return producto;
  }

  private remeraDora(): Producto {
    const producto = new Producto();
    producto.nombre = 'Remera Dora';
    producto.descripcionCorta = '¿Sabías que esta remera no lleva costuras? Sí, tal cual lo leíste. Es rápida, fácil y no lleva costuras! ¡Es perfecta! ';
    producto.descripcionLarga = 'Inspirada en el Sweater Dora, llega su versión en remera. Esta prenda es súper especial porque NO LLEVA COSTURAS. Ideal para todas las que no les gusta coser (¡Cómo yo!)';
    producto.detalles = 'GUIA PDF. Vas a encontrar el paso a paso escrito + gráficos.\n'
    + 'Además, incluye de regalo 2 videos que si bien pertenecen al Sweater Dora, te van a ser de mucha ayuda a la hora de tejer la remera.';
    producto.precio = 863;
    producto.urlMP = 'https://mpago.la/2bR7JyS ';
    producto.imagenPortada = 'remeraDora/adm-remeraDoraMin.jpg';
    producto.imagenesUrl = ['remeraDora/adm-remeraDora1.jpg', 'remeraDora/adm-remeraDora2.jpg', 'remeraDora/adm-remeraDora3.jpg', 'remeraDora/adm-remeraDora4.jpg'];
    producto.conocimientos = 'Deberás contar con conocimientos mínimos de crochet (sobre todo punto vareta), pero no hace falta ser una experta! Ya que está remera ES SÚPER FÁCIL';
    return producto;
  }


  private comboDora(): Producto {
    const producto = new Producto();
    producto.nombre = 'Combo Dora';
    producto.descripcionCorta = '¡Combo qué vas a amar! Ideal para la primavera.';
    producto.descripcionLarga = 'En este combo vas a poder disfrutar del Patrón de la Remera Dora + El curso del Sweater Dora. ¡Dos prendas que no pueden faltar en tu primavera Crochetera!';
    producto.detalles = 'Incluye acceso a clases de consulta vía mail (Curso Sweater).\n'
    + 'VIDEOS YA FILMADOS: Podés ver las clases CUANDO quieras y LAS VECES que quieras.\n';
    producto.precio = 1402;
    producto.urlMP = 'https://mpago.la/2jXnK5j';
    producto.imagenPortada = 'comboDora/adm-comboDoraMin.jpeg';
    producto.imagenesUrl = ['comboDora/adm-comboDora1.jpeg', 'remeraDora/adm-remeraDora1.jpg'];
    producto.conocimientos = 'Deberás tener conocimientos básicos de crochet: saber contar puntos, vueltas y realizar puntos básicos. En el curso te doy una explicación breve de estos puntos pero no aplica como práctica de los mismos.';
    return producto;
  }



  private musculosaAndrea(): Producto {
    const producto = new Producto();
    producto.nombre = 'Musculosa Andrea';
    producto.descripcionCorta = '¿Es Crochet? SÍ! Siempre es crochet, aunque parece 2 agujas. Te prometo que vas a amar tanto la elaboración como la musculosa terminada.';
    producto.descripcionLarga = 'En este curso te enseño a hacer una musculosa que se adapte a vos. Además te enseño a imitar un punto que parece dos agujas pero no lo es, siempre es crochet. Yo hice 3! Porque de verdad se hacen súper rápido.';
    producto.detalles = 'Clases de consulta de LUNES A VIERNES vía mail.\n'
    + 'Guía PDF paso a paso con explicaciones escritas y gráficos.\n'
    + 'Videos explicativos que ya están grabados: vas a poder verlos las veces que quieras y cuando quieras.'
    + '¡Indicaciones para hacer los 3 modelos de la musculosa que ves en las fotos!';
    producto.precio = 1025;
    producto.urlMP = 'https://mpago.la/1vdUY2G';
    producto.imagenPortada = 'musculosaAndrea/adm-musculosaAndreaMin.jpg';
    producto.imagenesUrl = ['musculosaAndrea/adm-musculosaAndrea1.jpg', 'musculosaAndrea/adm-musculosaAndrea2.jpg', 'musculosaAndrea/adm-musculosaAndrea3.jpg', 'musculosaAndrea/adm-musculosaAndrea4.jpg', 'musculosaAndrea/adm-musculosaAndrea5.jpg'];
    return producto;
  }


  // --------------------------------------------------------------------------------------
  // --------------------------------------- GRATIS ---------------------------------------
  // --------------------------------------------------------------------------------------
  private musculosaFlor(): Producto {
    const producto = new Producto();
    producto.nombre = 'Musculosa Flor';
    producto.descripcionCorta = 'Hola crochetera! Vengo a regalarte la primer prenda que formó parte de Algo de Mí. Para que la disfrutes en el Verano y que disfrutes aún más de tejerla.';
    producto.descripcionLarga = 'En el paso a paso te enseño a adaptarla a todo tipo de talles! Y también de hilados! Si cambiás el hilado con respecto al que yo usé, pero seguís todos los pasos de la guía… vas a poder tener TÚ Musculosa Flor: única y súper adaptada a tu estilo!';
    producto.detalles = 'REGALO hecho con mucho amor para todas las crocheteras de la Comunidad Algo de Mí.\n'
    + 'Es una guía dónde te explico el paso a paso para tejer esta prenda única y súper cómoda para disfrutar del verano. Además es muy sencilla de tejer, vas a amar tanto el proceso como el resultado!';
    producto.precio = 0;
    producto.urlMP = 'https://drive.google.com/file/d/1LZTpnL00OkbC5rJSI4ayLEjrz1bOAqZJ/view?usp=sharing';
    producto.imagenPortada = 'musculosaFlor/adm-musculosaFlorMin.jpg';
    producto.imagenesUrl = ['musculosaFlor/adm-musculosaFlor1.jpg', 'musculosaFlor/adm-musculosaFlor2.jpg', 'musculosaFlor/adm-musculosaFlor3.jpg'];
    return producto;
  }

  private posavasosYute(): Producto {
    const producto = new Producto();
    producto.nombre = 'Posavasos Yute';
    producto.descripcionCorta = 'TE REGALO con mucho amor el paso a paso de estos posavasos que son súper prácticos ya que vas a poder darles múltiples usos.';
    producto.descripcionLarga = 'Estos posavasos están realizados en Yute, pero podés hacerlos todos en hilo de algodón también!. Son súper prácticos y acompañan cualquier momento! Podés usarlo debajo de vasos, del mate, del termo, debajo de un lindo florero lleno de flores hermosas! Vos elegís.';
    producto.detalles = 'En esta guía vas a encontrar el paso a paso para poder realizar estos prácticos posavasos. Yo los uso todo el tiempo! De verdad, son lo más!';
    producto.precio = 0;
    producto.urlMP = 'https://drive.google.com/file/d/16aRzI3n12fQpZG34beX9VdQyqpWriioB/view?usp=sharing';
    producto.imagenPortada = 'posavasosYute/adm-posavasosYuteMin.jpg';
    producto.imagenesUrl = ['posavasosYute/adm-posavasosYute1.jpg' , 'posavasosYute/adm-posavasosYute2.jpg', 'posavasosYute/adm-posavasosYute3.jpg'];
    return producto;
  }

  private fundaEbook(): Producto {
    const producto = new Producto();
    producto.nombre = 'Funda para E-book';
    producto.descripcionCorta = 'Te traigo de REGALO esta propuesta: una funda para que tu E-Book esté súper protegido.';
    producto.descripcionLarga = 'Esta funda para E-Book es súper útil y además cuenta con una textura que enamora! También te doy ideas para que puedas usar el mismo patrón y realizar otros proyectos! ¿Cuál de todas esas opciones te gustaría hacer? No te olvides de compartir tu foto cuando esté listo que me encanta! Y así poder disfrutarlo con toda la #ComunidadAlgodeMí!';
    producto.detalles = 'En esta guía vas a encontrar el paso a paso para poder realizar esta funda para E-Book y te doy un par de ideas para que te animes a adaptarla a otros usos!';
    producto.precio = 0;
    producto.urlMP = 'https://drive.google.com/file/d/1eNszXkTnbE9afTNuxKu_MEQ9ilisR9T1/view?usp=sharing';
    producto.imagenPortada = 'fundaEbook/adm-fundaEbookMin.jpg';
    producto.imagenesUrl = ['fundaEbook/adm-fundaEbook1.jpg', 'fundaEbook/adm-fundaEbook2.jpg', 'fundaEbook/adm-fundaEbook3.jpg' ];
    return producto;
  }

  private mandalas(): Producto {
    const producto = new Producto();
    producto.nombre = 'Mandalas Algo de Mí';
    producto.descripcionCorta = 'TE REGALO un complemento perfecto para intercalar con los momentos de tejido.. MANDALAS PARA COPIAR Y COLOREAR! Todos los dibujé yo, y te los quiero compartir con mucho amor!';
    producto.descripcionLarga = '¿Conocés todos los beneficios de los mandalas?'
+ '\n1) Más relajación. Colorear es una forma de expresarte, es divertido y logra calmar la mente.'
+ '\n2) Podes alcanzar niveles más profundos de meditación.'
+ '\n3) Balancear el cuerpo, la mente y el espíritu.'
+ '\n4) Desarrollar tu creatividad.'
+ '\n5) Expresarte.'
+ '\n6) Realizar una conexión espiritual.'
+ '\n¿Te animás a probar sus beneficios? Hacelo y contame como te sentías antes y cómo te sentís después de practicar esta maravillosa técnica! Yo lo hago, y sirve un montón. En esos momentos en los que nos sentimos un poco agobiadas, no hay nada más lindo que preparar algo rico (en mi opinión lo mejor es acompañarlo con unos buenos mates) y adentrarse en este bello mundo de los mandalas!';
    producto.detalles = 'Este regalo es un mimo al alma, para que puedas probar todos sus beneficios. Todos los diseños están hechos por mi con mucho mucho amor. Descargalos y empezá a colorear!'
    + '\nAquellos que ya tienen color, te lo comparto para que puedas copiarlos y después pintarlos. ¿Te animás a mostrar cómo quedaron y compartirlo con la #ComunidadAlgodeMí? Me encantaría verlos!';
    producto.precio = 0;
    producto.urlMP = 'https://drive.google.com/drive/folders/1LFdx3DfwcaRxsRgW-TI2yBvEToZD5Lum?usp=sharing';
    producto.imagenPortada = 'mandalas/adm-mandalaMin.jpg';
    producto.imagenesUrl = ['mandalas/adm-mandala1.jpg', 'mandalas/adm-mandala2.jpg', 'mandalas/adm-mandala3.jpg'];
    return producto;
  }


}
