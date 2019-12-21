import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsConfiguraciontutorComponent } from './als-configuraciontutor.component';

describe('AlsConfiguraciontutorComponent', () => {
  let component: AlsConfiguraciontutorComponent;
  let fixture: ComponentFixture<AlsConfiguraciontutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsConfiguraciontutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsConfiguraciontutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
