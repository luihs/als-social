import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsModuleadminComponent } from './als-moduleadmin.component';

describe('AlsModuleadminComponent', () => {
  let component: AlsModuleadminComponent;
  let fixture: ComponentFixture<AlsModuleadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsModuleadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsModuleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
