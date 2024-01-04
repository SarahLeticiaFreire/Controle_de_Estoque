import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FabricanteComponent } from './fabricante.component';

describe('FabricanteComponent', () => {
  let component: FabricanteComponent;
  let fixture: ComponentFixture<FabricanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FabricanteComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FabricanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of fabricantes', () => {
    const compiled = fixture.nativeElement;
    component.fabricantes = [
      { id: 1, nome: 'Fabricante 1' },
      { id: 2, nome: 'Fabricante 2' },
    ];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);
  });

  it('should call cadastrarFabricante method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'cadastrarFabricante');
    compiled.querySelector('form').dispatchEvent(new Event('submit'));
    expect(component.cadastrarFabricante).toHaveBeenCalled();
  });

  it('should call excluirFabricante method on button click', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'excluirFabricante');
    compiled.querySelector('button').click();
    expect(component.excluirFabricante).toHaveBeenCalled();
  });

  it('should call atualizarFabricante method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'atualizarFabricante');
    compiled.querySelectorAll('form')[1].dispatchEvent(new Event('submit'));
    expect(component.atualizarFabricante).toHaveBeenCalled();
  });
});
