import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTeamsComponent } from './super-teams.component';

describe('SuperTeamsComponent', () => {
  let component: SuperTeamsComponent;
  let fixture: ComponentFixture<SuperTeamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperTeamsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
