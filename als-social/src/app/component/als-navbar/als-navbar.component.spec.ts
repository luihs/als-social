import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsNavbarComponent } from './als-navbar.component';

describe('AlsNavbarComponent', () => {
  let component: AlsNavbarComponent;
  let fixture: ComponentFixture<AlsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
