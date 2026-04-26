import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Veiculo } from '../../../modules/veiculos/interfaces/veiculo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-veiculos-form',
  templateUrl: './veiculos-form.component.html',
  styleUrls: ['./veiculos-form.component.scss']
})
export class VeiculosFormComponent implements OnInit, OnChanges {

  @Input() initialData?: Veiculo;
  @Output() submitForm = new EventEmitter<Veiculo>();

  form = this.fb.nonNullable.group({
    placa: ['', Validators.required],
    chassi: ['', Validators.required],
    renavam: ['', Validators.required],
    modelo: ['', Validators.required],
    marca: ['', Validators.required],
    ano: [0, [Validators.required, Validators.min(1900)]],
  });

  constructor(private fb: FormBuilder,
        private readonly router: Router,
  ) { }

  ngOnInit() {
   
  }

  submit() {
    console.log('submit', this.form.valid)
    if (this.form.valid) {
      this.submitForm.emit(this.form.getRawValue());
    }
  }
  ngOnChanges(changes: SimpleChanges) {
    this.initialData = changes['initialData']?.currentValue
    console.log('changes', changes,this.initialData)
     if (this.initialData) {
      this.form.patchValue(this.initialData);
    }
  }


  voltar() {
  this.router.navigate(['/veiculos']); // ajusta tua rota
}
}
