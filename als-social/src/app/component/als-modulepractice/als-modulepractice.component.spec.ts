import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsModulepracticeComponent } from './als-modulepractice.component';

describe('AlsModulepracticeComponent', () => {
  let component: AlsModulepracticeComponent;
  let fixture: ComponentFixture<AlsModulepracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsModulepracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsModulepracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
