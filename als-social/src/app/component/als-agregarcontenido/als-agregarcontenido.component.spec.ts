import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsAgregarcontenidoComponent } from './als-agregarcontenido.component';

describe('AlsAgregarcontenidoComponent', () => {
  let component: AlsAgregarcontenidoComponent;
  let fixture: ComponentFixture<AlsAgregarcontenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsAgregarcontenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsAgregarcontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
