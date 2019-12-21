import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsConferenciaComponent } from './als-conferencia.component';

describe('AlsConferenciaComponent', () => {
  let component: AlsConferenciaComponent;
  let fixture: ComponentFixture<AlsConferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsConferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsConferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
