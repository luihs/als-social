import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsPaymentComponent } from './als-payment.component';

describe('AlsPaymentComponent', () => {
  let component: AlsPaymentComponent;
  let fixture: ComponentFixture<AlsPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
