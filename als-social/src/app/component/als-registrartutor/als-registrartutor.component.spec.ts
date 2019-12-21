import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsRegistrartutorComponent } from './als-registrartutor.component';

describe('AlsRegistrartutorComponent', () => {
  let component: AlsRegistrartutorComponent;
  let fixture: ComponentFixture<AlsRegistrartutorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsRegistrartutorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsRegistrartutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
