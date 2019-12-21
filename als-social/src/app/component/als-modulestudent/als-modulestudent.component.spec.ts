import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsModulestudentComponent } from './als-modulestudent.component';

describe('AlsModulestudentComponent', () => {
  let component: AlsModulestudentComponent;
  let fixture: ComponentFixture<AlsModulestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsModulestudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsModulestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
