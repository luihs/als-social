import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsCertificadoComponent } from './als-certificado.component';

describe('AlsCertificadoComponent', () => {
  let component: AlsCertificadoComponent;
  let fixture: ComponentFixture<AlsCertificadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsCertificadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsCertificadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
