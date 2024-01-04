// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NomecompComponent } from './nomecomp/nomecomp.component';
import { ClienteComponent } from './cliente/cliente.component'; // Importe as outras entidades conforme necessário
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { EntradaProdutoComponent } from './entradaproduto/entradaProduto.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/nomecomp', pathMatch: 'full' },
  { path: 'nomecomp', component: NomecompComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClienteComponent },
  { path: 'produtos', component: ProdutoComponent },
  { path: 'vendas', component: VendaComponent },
  { path: 'fabricantes', component: FabricanteComponent },
  { path: 'fornecedores', component: FornecedorComponent },
  { path: 'entradas', component: EntradaProdutoComponent },
  { path: 'categorias', component: CategoriaComponent },
  { path: 'vendas', component: VendaComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
