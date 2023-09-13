import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSolucoesComponent } from './modal-solucoes.component';

describe('ModalSolucoesComponent', () => {
  let component: ModalSolucoesComponent;
  let fixture: ComponentFixture<ModalSolucoesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalSolucoesComponent]
    });
    fixture = TestBed.createComponent(ModalSolucoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
