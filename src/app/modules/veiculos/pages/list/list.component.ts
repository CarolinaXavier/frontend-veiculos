import { Component, OnInit } from '@angular/core';
import { VeiculosService } from '../../api/veiculos.service';
import { Veiculo } from '../../interfaces/veiculo';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  veiculos: Veiculo[] = [];


  constructor(
    private readonly service: VeiculosService,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog) { }

  ngOnInit() {
    this.service.listar().subscribe(data => {
      this.veiculos = data;
    });
  }

  excluir(id: string) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: { message: 'Deseja realmente excluir este veículo?' }
    });

    dialogRef.afterClosed().subscribe(confirmado => {
      if (confirmado) {
        this.service.remover(id).subscribe(() => {
          this.veiculos = this.veiculos.filter(v => v._id !== id);
          this.snackBar.open('Veículo excluído com sucesso!', 'OK', {
            verticalPosition: 'top',
            panelClass: ['success-snackbar']
          });
        });
      }
    });
  }
}
