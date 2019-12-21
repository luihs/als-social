import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsAdminComponent } from './als-admin.component';

describe('AlsAdminComponent', () => {
  let component: AlsAdminComponent;
  let fixture: ComponentFixture<AlsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
