import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDocumentosComponent } from './cadastro-documentos.component';

describe('CadastroDocumentosComponent', () => {
  let component: CadastroDocumentosComponent;
  let fixture: ComponentFixture<CadastroDocumentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroDocumentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroDocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
