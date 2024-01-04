// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { ApiService } from './api.service';
import { LoginService } from './login.service';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { NomecompComponent } from './nomecomp/nomecomp.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FabricanteComponent } from './fabricante/fabricante.component';
import { EntradaProdutoComponent } from './entradaproduto/entradaProduto.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaComponent } from './venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    NomecompComponent,
    LoginComponent,
    CategoriaComponent,
    ClienteComponent,
    FabricanteComponent,
    FornecedorComponent,
    EntradaProdutoComponent,
    ProdutoComponent,
    VendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ApiService,
    LoginService,
    AuthGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
