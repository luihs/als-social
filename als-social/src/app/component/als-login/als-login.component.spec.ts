import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsLoginComponent } from './als-login.component';

describe('AlsLoginComponent', () => {
  let component: AlsLoginComponent;
  let fixture: ComponentFixture<AlsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
