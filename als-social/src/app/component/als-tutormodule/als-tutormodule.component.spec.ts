import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsTutormoduleComponent } from './als-tutormodule.component';

describe('AlsTutormoduleComponent', () => {
  let component: AlsTutormoduleComponent;
  let fixture: ComponentFixture<AlsTutormoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsTutormoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsTutormoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
