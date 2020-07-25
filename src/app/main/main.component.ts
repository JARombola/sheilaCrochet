import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
  ]
})
export class MainComponent implements OnInit {

  public imagen = 'https://laopinionla.files.wordpress.com/2018/11/shutterstock_765966355.jpg?quality=80&strip=all&w=940';

  constructor() { }

  ngOnInit() {
    this.imagen = 'https://laopinionla.files.wordpress.com/2018/11/shutterstock_765966355.jpg?quality=80&strip=all&w=940';

  }


}
