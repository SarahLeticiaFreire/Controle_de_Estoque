
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  vendas: any[] = [];
  novaVenda: any = {
  };
    vendaDetalhes: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarVendas();
  }

  carregarVendas() {
    this.apiService.getVendas().subscribe(data => {
      this.vendas = data;
    });
  }

  cadastrarVenda() {
    this.apiService.cadastrarVenda(this.novaVenda).subscribe(() => {
      this.carregarVendas();
      this.novaVenda = {}; 
    });
  }

  detalharVenda(id: number) {
    this.apiService.getVendaById(id).subscribe(data => {
      this.vendaDetalhes = data;
    });
}
}