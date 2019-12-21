import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsProgressComponent } from './als-progress.component';

describe('AlsProgressComponent', () => {
  let component: AlsProgressComponent;
  let fixture: ComponentFixture<AlsProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
