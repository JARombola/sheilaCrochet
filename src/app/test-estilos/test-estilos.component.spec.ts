import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestEstilosComponent } from './test-estilos.component';

describe('TestEstilosComponent', () => {
  let component: TestEstilosComponent;
  let fixture: ComponentFixture<TestEstilosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestEstilosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestEstilosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
