import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
  ]
})
export class ShopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
