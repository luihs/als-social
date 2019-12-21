import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsNavbaradminComponent } from './als-navbaradmin.component';

describe('AlsNavbaradminComponent', () => {
  let component: AlsNavbaradminComponent;
  let fixture: ComponentFixture<AlsNavbaradminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsNavbaradminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsNavbaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
