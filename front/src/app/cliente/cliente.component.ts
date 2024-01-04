import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clientes: any[] = [];
  novoClienteNome: string = '';
  clienteAtualizadoNome: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.carregarClientes();
  }

  carregarClientes() {
    this.apiService.getCliente().subscribe(data => {
      this.clientes = data;
    });
  }

  cadastrarCliente() {
    const novoCliente = { nome: this.novoClienteNome }; // Substitua pelos dados reais
    this.apiService.cadastrarCliente(novoCliente).subscribe(() => {
      this.carregarClientes();
    });
  }

  excluirCliente(id: number) {
    this.apiService.excluirCliente(id).subscribe(() => {
      this.carregarClientes();
    });
  }

  atualizarCliente() {
    const clienteAtualizado = { id: 1, nome: this.clienteAtualizadoNome }; // Substitua pelos dados reais
    this.apiService.atualizarCliente(clienteAtualizado).subscribe(() => {
      this.carregarClientes();
    });
  }
}
