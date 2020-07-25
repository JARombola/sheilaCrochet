import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public path: string;
  public colorOrigin = 'navbar navbar-expand-lg';
  public color: string;
  public colorUser = ' navbar-dark secondary-color';

  constructor(private route: Router) { }

  ngOnInit() {
    this.color = this.colorOrigin + this.colorUser;
  }

  currentPath() {
    this.path = this.route.url;
  }

  changeColor() {
    this.color = this.colorOrigin + this.colorUser;
  }
}
