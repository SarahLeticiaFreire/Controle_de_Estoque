import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {
  categorias: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarCategorias();
  }

  carregarCategorias() {
    this.apiService.getCategoria().subscribe(data => {
      this.categorias = data;
    });
  }

  cadastrarCategoria() {
    const novaCategoria = { nome: 'Nova Categoria' }; // Substitua pelos dados reais
    this.apiService.cadastrarCategoria(novaCategoria).subscribe(() => {
      this.carregarCategorias();
    });
  }

  excluirCategoria(id: number) {
    this.apiService.excluirCategoria(id).subscribe(() => {
      this.carregarCategorias();
    });
  }

  atualizarCategoria() {
    const categoriaAtualizada = { id: 1, nome: 'Categoria Atualizada' }; // Substitua pelos dados reais
    this.apiService.atualizarCategoria(categoriaAtualizada).subscribe(() => {
      this.carregarCategorias();
    });
  }
}
