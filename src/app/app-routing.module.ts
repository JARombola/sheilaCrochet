import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ShopComponent } from './shop/shop.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { MantenimientoComponent } from './mantenimiento/mantenimiento.component';
import { environment } from 'src/environments/environment';
import { MantenimientoLayoutComponent } from './mantenimiento-layout/mantenimiento-layout.component';
import { TestEstilosComponent } from './test-estilos/test-estilos.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {
        path: '', component: MainComponent
      },
      {
        path: 'quien-soy', component: AboutMeComponent
      },
      {
        path: 'shop', component: ShopComponent
      },
      {
        path: 'producto/:id', component: ProductDetailsComponent
      },
    ]
  },
  {
    path: 'pruebaEstilos', component: TestEstilosComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];

const rutasMantenimiento: Routes = [
  {
    path: '', component: MantenimientoComponent
  },
  {
    path: 'admin', component: MantenimientoLayoutComponent,
    children: [
    {
       path: '', component: MainComponent
    },
    {
      path: 'quien-soy', component: AboutMeComponent
    },
    {
      path: 'shop', component: ShopComponent
    },
    {
      path: 'producto/:id', component: ProductDetailsComponent
    },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(environment.mantenimiento ? rutasMantenimiento : routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
