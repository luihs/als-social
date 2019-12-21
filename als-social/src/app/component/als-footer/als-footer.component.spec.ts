import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsFooterComponent } from './als-footer.component';

describe('AlsFooterComponent', () => {
  let component: AlsFooterComponent;
  let fixture: ComponentFixture<AlsFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
