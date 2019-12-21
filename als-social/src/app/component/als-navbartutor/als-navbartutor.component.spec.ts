import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsNavbartutorComponent } from './als-navbartutor.component';

describe('AlsNavbartutorComponent', () => {
  let component: AlsNavbartutorComponent;
  let fixture: ComponentFixture<AlsNavbartutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsNavbartutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsNavbartutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
