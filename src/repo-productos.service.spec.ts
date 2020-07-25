import { TestBed } from '@angular/core/testing';

import { RepoProductosService } from './repo-productos.service';

describe('RepoProductosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RepoProductosService = TestBed.get(RepoProductosService);
    expect(service).toBeTruthy();
  });
});
