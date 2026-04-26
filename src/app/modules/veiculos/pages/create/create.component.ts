import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VeiculosService } from '../../api/veiculos.service';
import { Veiculo } from '../../interfaces/veiculo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  constructor(
    private readonly service: VeiculosService,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar) { }

  salvar(data: any) {
    console.log('salvar', data)
    this.service.criar(data).subscribe(() => {
      this.snackBar.open('Veículo criado com sucesso!', 'OK', {
         verticalPosition: 'top',
  panelClass: ['success-snackbar']
      })
      this.router.navigate(['/veiculos']);
    });
  }

}
