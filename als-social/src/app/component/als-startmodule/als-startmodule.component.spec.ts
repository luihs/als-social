import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsStartmoduleComponent } from './als-startmodule.component';

describe('AlsStartmoduleComponent', () => {
  let component: AlsStartmoduleComponent;
  let fixture: ComponentFixture<AlsStartmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsStartmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsStartmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
