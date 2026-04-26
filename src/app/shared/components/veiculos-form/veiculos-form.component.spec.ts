/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VeiculosFormComponent } from './veiculos-form.component';

describe('VeiculosFormComponent', () => {
  let component: VeiculosFormComponent;
  let fixture: ComponentFixture<VeiculosFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiculosFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculosFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
