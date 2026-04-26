import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeiculosService } from '../../api/veiculos.service';
import { Veiculo } from '../../interfaces/veiculo';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  veiculo!: Veiculo;

  constructor(
    private readonly service: VeiculosService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.service.buscar(id).subscribe(v => this.veiculo = v);
  }

  salvar(data: any) {
    this.service.atualizar(this.veiculo._id!, data).subscribe(() => {
      this.snackBar.open('Veículo atualizado com sucesso!', 'OK', {
        verticalPosition: 'top',
  panelClass: ['success-snackbar']
      });
      this.router.navigate(['/veiculos']);
    });
  }

}
