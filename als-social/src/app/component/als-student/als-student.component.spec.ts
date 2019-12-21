import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsStudentComponent } from './als-student.component';

describe('AlsStudentComponent', () => {
  let component: AlsStudentComponent;
  let fixture: ComponentFixture<AlsStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
