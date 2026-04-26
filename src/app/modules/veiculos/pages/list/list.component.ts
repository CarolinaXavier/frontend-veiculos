import { Component } from '@angular/core';
import { VeiculosService } from '../../api/veiculos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

 veiculos$ = this.service.listar();

  constructor(private service: VeiculosService) {}

  excluir(id: string) {
    this.service.remover(id).subscribe(() => location.reload());
  }

}
