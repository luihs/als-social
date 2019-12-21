import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsMensajesComponent } from './als-mensajes.component';

describe('AlsMensajesComponent', () => {
  let component: AlsMensajesComponent;
  let fixture: ComponentFixture<AlsMensajesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsMensajesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsMensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
