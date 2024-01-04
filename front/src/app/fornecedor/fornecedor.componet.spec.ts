import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FornecedorComponent } from './fornecedor.component';

describe('FornecedorComponent', () => {
  let component: FornecedorComponent;
  let fixture: ComponentFixture<FornecedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FornecedorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FornecedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of fornecedores', () => {
    const compiled = fixture.nativeElement;
    component.fornecedores = [
      { id: 1, nome: 'Fornecedor 1' },
      { id: 2, nome: 'Fornecedor 2' },
    ];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);
  });

  it('should call cadastrarFornecedor method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'cadastrarFornecedor');
    compiled.querySelector('form').dispatchEvent(new Event('submit'));
    expect(component.cadastrarFornecedor).toHaveBeenCalled();
  });

  it('should call excluirFornecedor method on button click', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'excluirFornecedor');
    compiled.querySelector('button').click();
    expect(component.excluirFornecedor).toHaveBeenCalled();
  });

  it('should call atualizarFornecedor method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'atualizarFornecedor');
    compiled.querySelectorAll('form')[1].dispatchEvent(new Event('submit'));
    expect(component.atualizarFornecedor).toHaveBeenCalled();
  });
});
