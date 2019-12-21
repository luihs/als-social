import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsEditarcontenidoComponent } from './als-editarcontenido.component';

describe('AlsEditarcontenidoComponent', () => {
  let component: AlsEditarcontenidoComponent;
  let fixture: ComponentFixture<AlsEditarcontenidoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsEditarcontenidoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsEditarcontenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
