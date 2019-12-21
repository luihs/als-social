import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsNavbarstudentComponent } from './als-navbarstudent.component';

describe('AlsNavbarstudentComponent', () => {
  let component: AlsNavbarstudentComponent;
  let fixture: ComponentFixture<AlsNavbarstudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsNavbarstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsNavbarstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
