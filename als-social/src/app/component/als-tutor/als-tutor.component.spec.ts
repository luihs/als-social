import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsTutorComponent } from './als-tutor.component';

describe('AlsTutorComponent', () => {
  let component: AlsTutorComponent;
  let fixture: ComponentFixture<AlsTutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsTutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
