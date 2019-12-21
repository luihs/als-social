import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsPromoverComponent } from './als-promover.component';

describe('AlsPromoverComponent', () => {
  let component: AlsPromoverComponent;
  let fixture: ComponentFixture<AlsPromoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsPromoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsPromoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
