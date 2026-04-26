import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Veiculo } from '../interfaces/veiculo';
import { environment } from 'src/app/environments/environment';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class VeiculosService {
  api = `${environment.apiUrl}/veiculos`;
 constructor(private http: HttpClient) {}

  listar(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.api);
  }

  buscar(id: string) {
    return this.http.get<Veiculo>(`${this.api}/${id}`);
  }

  criar(data: Veiculo) {
    return this.http.post(this.api, data);
  }

  atualizar(id: string, data: Veiculo) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  remover(id: string) {
    return this.http.delete(`${this.api}/${id}`);
  }

}