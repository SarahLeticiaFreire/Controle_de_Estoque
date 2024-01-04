import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  fornecedores: any[] = [];
  novoFornecedor: string = '';
  fornecedorAtualizado: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarFornecedores();
  }

  carregarFornecedores() {
    this.apiService.getFornecedores().subscribe(data => {
      this.fornecedores = data;
    });
  }

  cadastrarFornecedor() {
    const novoFornecedor = { nome: this.novoFornecedor };
    this.apiService.cadastrarFornecedor(novoFornecedor).subscribe(() => {
      this.carregarFornecedores();
    });
  }

  excluirFornecedor(id: number) {
    this.apiService.excluirFornecedor(id).subscribe(() => {
      this.carregarFornecedores();
    });
  }

  atualizarFornecedor() {
    const fornecedorAtualizado = { id: 1, nome: this.fornecedorAtualizado }; // Substitua pelos dados reais
    this.apiService.atualizarFornecedor(fornecedorAtualizado).subscribe(() => {
      this.carregarFornecedores();
    });
  }
}
