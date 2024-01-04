import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fabricante',
  templateUrl: './fabricante.component.html',
  styleUrls: ['./fabricante.component.css']
})
export class FabricanteComponent implements OnInit {
  fabricantes: any[] = [];
  novoFabricante: string = '';
  fabricanteAtualizado: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarFabricantes();
  }

  carregarFabricantes() {
    this.apiService.getFabricantes().subscribe(data => {
      this.fabricantes = data;
    });
  }

  cadastrarFabricante() {
    const novoFabricante = { nome: this.novoFabricante };
    this.apiService.cadastrarFabricante(novoFabricante).subscribe(() => {
      this.carregarFabricantes();
    });
  }

  excluirFabricante(id: number) {
    this.apiService.excluirFabricante(id).subscribe(() => {
      this.carregarFabricantes();
    });
  }

  atualizarFabricante() {
    const fabricanteAtualizado = { id: 1, nome: this.fabricanteAtualizado }; // Substitua pelos dados reais
    this.apiService.atualizarFabricante(fabricanteAtualizado).subscribe(() => {
      this.carregarFabricantes();
    });
  }
}
