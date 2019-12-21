import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlsPerfilComponent } from './als-perfil.component';

describe('AlsPerfilComponent', () => {
  let component: AlsPerfilComponent;
  let fixture: ComponentFixture<AlsPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlsPerfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlsPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
