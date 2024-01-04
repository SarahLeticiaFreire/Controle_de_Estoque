import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-entradaproduto',
  templateUrl: './entradaproduto.component.html',
  styleUrls: ['./entradaproduto.component.css']
})
export class EntradaProdutoComponent implements OnInit {
  entradasProdutos: any[] = [];
  produtos: any[] = []; 
  novoProduto: number = 1; 
  quantidade: number = 0;
  preco: number = 0;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarEntradasProdutos();
  }

  carregarEntradasProdutos() {
    this.apiService.getEntradasProdutos().subscribe(data => {
      this.entradasProdutos = data;
    });
  }

  cadastrarEntradaProduto() {
    const novaEntradaProduto = {
      produto: { id: this.novoProduto }, // Substitua pelos dados reais do produto
      quantidade: this.quantidade,
      preco: this.preco
    };
    this.apiService.cadastrarEntradaProduto(novaEntradaProduto).subscribe(() => {
      this.carregarEntradasProdutos();
    });
  }

  excluirEntradaProduto(id: number) {
    this.apiService.excluirEntradaProduto(id).subscribe(() => {
      this.carregarEntradasProdutos();
    });
  }
}
