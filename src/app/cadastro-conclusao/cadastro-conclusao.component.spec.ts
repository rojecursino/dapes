import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroConclusaoComponent } from './cadastro-conclusao.component';

describe('CadastroConclusaoComponent', () => {
  let component: CadastroConclusaoComponent;
  let fixture: ComponentFixture<CadastroConclusaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroConclusaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroConclusaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
