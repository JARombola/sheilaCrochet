import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoLayoutComponent } from './mantenimiento-layout.component';

describe('MantenimientoLayoutComponent', () => {
  let component: MantenimientoLayoutComponent;
  let fixture: ComponentFixture<MantenimientoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
