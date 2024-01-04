import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProdutoComponent } from './produto.component';

describe('ProdutoComponent', () => {
  let component: ProdutoComponent;
  let fixture: ComponentFixture<ProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdutoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of produtos', () => {
    const compiled = fixture.nativeElement;
    component.produtos = [
      { id: 1, nome: 'Produto 1', descricao: 'Descrição 1', quantidadeEstoque: 10, preco: 20.5 },
      { id: 2, nome: 'Produto 2', descricao: 'Descrição 2', quantidadeEstoque: 5, preco: 15.75 },
    ];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);
  });

  it('should call cadastrarProduto method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'cadastrarProduto');
    compiled.querySelector('form').dispatchEvent(new Event('submit'));
    expect(component.cadastrarProduto).toHaveBeenCalled();
  });

  it('should call excluirProduto method on button click', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'excluirProduto');
    compiled.querySelector('button').click();
    expect(component.excluirProduto).toHaveBeenCalled();
  });
});
