import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mantenimiento-layout',
  templateUrl: './mantenimiento-layout.component.html',
  styleUrls: ['./mantenimiento-layout.component.scss']
})
export class MantenimientoLayoutComponent implements OnInit {
  public path: string;

  constructor(private route: Router) { }

  ngOnInit() {
  }

  currentPath() {
    this.path = this.route.url;
  }

}
