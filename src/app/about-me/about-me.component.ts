import { Component, OnInit } from '@angular/core';
import { fadeInOnEnterAnimation, rotateInOnEnterAnimation } from 'angular-animations';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  animations: [
    fadeInOnEnterAnimation(),
    rotateInOnEnterAnimation({degrees: -30}),
  ]
})
export class AboutMeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
