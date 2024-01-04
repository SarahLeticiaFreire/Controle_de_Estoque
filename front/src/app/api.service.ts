// api.service.ts - para pegar dados da api
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  login(username: string, password: string) {
    const loginData = { username, password };
    return this.http.post<any>(`${this.baseUrl}/login`, loginData);
  }
  private baseUrl = 'http://localhost:8080/'; 

  constructor(private http: HttpClient) {}

  //categoria
  getCategoria(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/categorias`);
  }

  getCategoriaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/categorias/${id}`);
  }

  cadastrarCategoria(categoria: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/categorias`, categoria);
  }

  excluirCategoria(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/categorias/${id}`);
  }

  atualizarCategoria(categoria: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/categorias`, categoria);
  }

  //clientes
  getCliente(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/clientes`);
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/clientes/${id}`);
  }

  cadastrarCliente(cliente: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/clientes`, cliente);
  }

  excluirCliente(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/clientes/${id}`);
  }

  atualizarCliente(cliente: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/clientes`, cliente);
  }

  //fabricantes
  getFabricantes(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fabricantes`);
  }

  getFabricanteById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fabricantes/${id}`);
  }

  cadastrarFabricante(fabricante: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/fabricantes`, fabricante);
  }

  excluirFabricante(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/fabricantes/${id}`);
  }

  atualizarFabricante(fabricante: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/fabricantes`, fabricante);
  }

  //fornecedores
  getFornecedores(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/fornecedores`);
  }

  getFornecedorById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/fornecedores/${id}`);
  }

  cadastrarFornecedor(fornecedor: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/fornecedores`, fornecedor);
  }

  excluirFornecedor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/fornecedores/${id}`);
  }

  atualizarFornecedor(fornecedor: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/fornecedores`, fornecedor);
  }

  //produto
  getProdutos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/produtos`);
  }

  getProdutoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/produtos/${id}`);
  }

  cadastrarProduto(produto: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/produtos`, produto);
  }

  excluirProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/produtos/${id}`);
  }

  //vendas
  getVendas(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/vendas`);
  }

  getVendaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/vendas/${id}`);
  }

  cadastrarVenda(venda: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/vendas`, venda);
  }

  atualizarVenda(id: number, venda: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/vendas/${id}`, venda);
  }

  excluirVenda(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/vendas/${id}`);
  }

  //entradaProduto
  getEntradasProdutos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/entradaprodutos`);
  }

  getEntradaProdutoById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/entradaprodutos/${id}`);
  }

  cadastrarEntradaProduto(entradaProduto: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/entradaprodutos`, entradaProduto);
  }

  excluirEntradaProduto(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/entradaprodutos/${id}`);
  }

}
