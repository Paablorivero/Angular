import { TestBed } from '@angular/core/testing';

import { ServicioProductos } from './servicio-productos';

describe('ServicioProductos', () => {
  let service: ServicioProductos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProductos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
