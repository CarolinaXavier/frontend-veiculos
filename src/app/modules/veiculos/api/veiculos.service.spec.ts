/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VeiculosService } from './veiculos.service';

describe('Service: Veiculos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculosService]
    });
  });

  it('should ...', inject([VeiculosService], (service: VeiculosService) => {
    expect(service).toBeTruthy();
  }));
});
