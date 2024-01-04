import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntradaProdutoComponent } from './entradaProduto.component';

describe('EntradaProdutoComponent', () => {
  let component: EntradaProdutoComponent;
  let fixture: ComponentFixture<EntradaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EntradaProdutoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of entradasProdutos', () => {
    const compiled = fixture.nativeElement;
    component.entradasProdutos = [
      { id: 1, produto: { nome: 'Produto 1' }, quantidade: 10, preco: 20.5 },
      { id: 2, produto: { nome: 'Produto 2' }, quantidade: 5, preco: 15.75 },
    ];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);
  });

  it('should call cadastrarEntradaProduto method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'cadastrarEntradaProduto');
    compiled.querySelector('form').dispatchEvent(new Event('submit'));
    expect(component.cadastrarEntradaProduto).toHaveBeenCalled();
  });

  it('should call excluirEntradaProduto method on button click', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'excluirEntradaProduto');
    compiled.querySelector('button').click();
    expect(component.excluirEntradaProduto).toHaveBeenCalled();
  });
});
