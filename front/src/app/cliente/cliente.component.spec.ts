import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteComponent } from './cliente.component';

describe('ClienteComponent', () => {
  let component: ClienteComponent;
  let fixture: ComponentFixture<ClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of clients', () => {
    const compiled = fixture.nativeElement;
    component.clientes = [
      { id: 1, nome: 'Cliente 1' },
      { id: 2, nome: 'Cliente 2' },
    ];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);
  });

  it('should call cadastrarCliente method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'cadastrarCliente');
    compiled.querySelector('form').dispatchEvent(new Event('submit'));
    expect(component.cadastrarCliente).toHaveBeenCalled();
  });

  it('should call excluirCliente method on button click', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'excluirCliente');
    compiled.querySelector('button').click();
    expect(component.excluirCliente).toHaveBeenCalled();
  });

  it('should call atualizarCliente method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'atualizarCliente');
    compiled.querySelectorAll('form')[1].dispatchEvent(new Event('submit'));
    expect(component.atualizarCliente).toHaveBeenCalled();
  });
});
