import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsUsersComponent } from './als-users.component';

describe('AlsUsersComponent', () => {
  let component: AlsUsersComponent;
  let fixture: ComponentFixture<AlsUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
