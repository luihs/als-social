import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsRegisterComponent } from './als-register.component';

describe('AlsRegisterComponent', () => {
  let component: AlsRegisterComponent;
  let fixture: ComponentFixture<AlsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
