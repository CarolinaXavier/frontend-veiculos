import { TestBed } from '@angular/core/testing';
import { VeiculosService } from './veiculos.service';

describe('VeiculosService', () => {
  let service: VeiculosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VeiculosService]
    });

    service = TestBed.inject(VeiculosService);
  });

  it('deve ser criado', () => {
    expect(service).toBeTruthy();
  });
});