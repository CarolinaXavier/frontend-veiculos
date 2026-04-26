import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { CreateComponent } from './create.component';
import { VeiculosService } from '../../api/veiculos.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  let serviceMock: any;
  let routerMock: any;
  let snackBarMock: any;

  beforeEach(async () => {
    serviceMock = {
      criar: jest.fn()
    };

    routerMock = {
      navigate: jest.fn()
    };

    snackBarMock = {
      open: jest.fn()
    };

    await TestBed.configureTestingModule({
      declarations: [CreateComponent],
      providers: [
        { provide: VeiculosService, useValue: serviceMock },
        { provide: Router, useValue: routerMock },
        { provide: MatSnackBar, useValue: snackBarMock }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
  });

  // =========================
  // ✅ Deve criar o componente
  // =========================
  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  // =========================
  // ✅ salvar()
  // =========================
  it('deve chamar service, exibir snackbar e navegar ao salvar', () => {
    const mockData = {
      placa: 'ABC1234',
      modelo: 'Gol'
    };

    serviceMock.criar.mockReturnValue(of({}));

    component.salvar(mockData);

    // service
    expect(serviceMock.criar).toHaveBeenCalledWith(mockData);

    // snackbar
    expect(snackBarMock.open).toHaveBeenCalledWith(
      'Veículo criado com sucesso!',
      'OK',
      expect.objectContaining({
        panelClass: ['success-snackbar']
      })
    );

    // navegação
    expect(routerMock.navigate).toHaveBeenCalledWith(['/veiculos']);
  });
});