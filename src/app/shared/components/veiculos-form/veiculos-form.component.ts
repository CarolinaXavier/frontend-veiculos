import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Veiculo } from 'src/app/modules/veiculos/interfaces/veiculo';

@Component({
  selector: 'app-veiculos-form',
  templateUrl: './veiculos-form.component.html',
  styleUrls: ['./veiculos-form.component.css']
})
export class VeiculosFormComponent implements OnInit {

  @Input() initialData?: Veiculo;
  @Output() submitForm = new EventEmitter<Veiculo>();

  form = this.fb.group({
    placa: ['', Validators.required],
    chassi: ['', Validators.required],
    renavam: ['', Validators.required],
    modelo: ['', Validators.required],
    marca: ['', Validators.required],
    ano: [null, [Validators.required]]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (this.initialData) {
     // this.form.patchValue(this.initialData);
    }
  }

  submit() {
    if (this.form.valid) {
      //this.submitForm.emit(this.form.value as Veiculo);
    }
  }

}
