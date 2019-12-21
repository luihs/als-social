import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsConfigurationComponent } from './als-configuration.component';

describe('AlsConfigurationComponent', () => {
  let component: AlsConfigurationComponent;
  let fixture: ComponentFixture<AlsConfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsConfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
