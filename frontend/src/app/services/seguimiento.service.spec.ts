import { TestBed } from '@angular/core/testing';

import { SeguimientoService } from './seguimiento.service';

describe('SeguimientoServiceService', () => {
  let service: SeguimientoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguimientoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
