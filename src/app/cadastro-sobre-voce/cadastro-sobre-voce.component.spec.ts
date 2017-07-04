import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroSobreVoceComponent } from './cadastro-sobre-voce.component';

describe('CadastroSobreVoceComponent', () => {
  let component: CadastroSobreVoceComponent;
  let fixture: ComponentFixture<CadastroSobreVoceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroSobreVoceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroSobreVoceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
