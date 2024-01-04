import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoriaComponent } from './categoria.component';

describe('CategoriaComponent', () => {
  let component: CategoriaComponent;
  let fixture: ComponentFixture<CategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoriaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of categories', () => {
    const compiled = fixture.nativeElement;
    component.categorias = [
      { id: 1, nome: 'Categoria 1' },
      { id: 2, nome: 'Categoria 2' },
    ];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);
  });

  it('should call cadastrarCategoria method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'cadastrarCategoria');
    compiled.querySelector('form').dispatchEvent(new Event('submit'));
    expect(component.cadastrarCategoria).toHaveBeenCalled();
  });

  it('should call excluirCategoria method on button click', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'excluirCategoria');
    compiled.querySelector('button').click();
    expect(component.excluirCategoria).toHaveBeenCalled();
  });

  it('should call atualizarCategoria method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'atualizarCategoria');
    compiled.querySelectorAll('form')[1].dispatchEvent(new Event('submit'));
    expect(component.atualizarCategoria).toHaveBeenCalled();
  });
});
