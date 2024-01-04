import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  produtos: any[] = [];
  novoProduto: any = {
    nome: '',
    descricao: '',
    quantidadeEstoque: 0,
    preco: 0,

  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarProdutos();
  }

  carregarProdutos() {
    this.apiService.getProdutos().subscribe(data => {
      this.produtos = data;
    });
  }

  cadastrarProduto() {
    this.apiService.cadastrarProduto(this.novoProduto).subscribe(() => {
      this.carregarProdutos();
      this.novoProduto = {}; 
    });
  }

  excluirProduto(id: number) {
    this.apiService.excluirProduto(id).subscribe(() => {
      this.carregarProdutos();
    });
  }
}
