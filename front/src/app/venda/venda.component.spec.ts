import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VendaComponent } from './venda.component';

describe('VendaComponent', () => {
  let component: VendaComponent;
  let fixture: ComponentFixture<VendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VendaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the list of vendas', () => {
    const compiled = fixture.nativeElement;
    component.vendas = [
      { id: 1, dataHora: '2022-01-01T12:00:00', totalVenda: 100 },
      { id: 2, dataHora: '2022-01-02T15:30:00', totalVenda: 150 },
    ];
    fixture.detectChanges();
    expect(compiled.querySelectorAll('li').length).toBe(2);
  });

  it('should call cadastrarVenda method on form submission', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'cadastrarVenda');
    compiled.querySelector('form').dispatchEvent(new Event('submit'));
    expect(component.cadastrarVenda).toHaveBeenCalled();
  });

  it('should call detalharVenda method on button click', () => {
    const compiled = fixture.nativeElement;
    spyOn(component, 'detalharVenda');
    compiled.querySelector('button').click();
    expect(component.detalharVenda).toHaveBeenCalled();
  });
});
