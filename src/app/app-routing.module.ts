import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ShopComponent } from './shop/shop.component';
import { LayoutComponent } from './layout/layout.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
