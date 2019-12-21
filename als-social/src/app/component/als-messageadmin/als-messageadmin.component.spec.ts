import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsMessageadminComponent } from './als-messageadmin.component';

describe('AlsMessageadminComponent', () => {
  let component: AlsMessageadminComponent;
  let fixture: ComponentFixture<AlsMessageadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsMessageadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsMessageadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
