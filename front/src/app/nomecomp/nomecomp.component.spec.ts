import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomecompComponent } from './nomecomp.component';

describe('NomecompComponent', () => {
  let component: NomecompComponent;
  let fixture: ComponentFixture<NomecompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NomecompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NomecompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
