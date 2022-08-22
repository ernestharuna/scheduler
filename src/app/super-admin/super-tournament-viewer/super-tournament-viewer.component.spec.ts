import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperTournamentViewerComponent } from './super-tournament-viewer.component';

describe('SuperTournamentViewerComponent', () => {
  let component: SuperTournamentViewerComponent;
  let fixture: ComponentFixture<SuperTournamentViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperTournamentViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperTournamentViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
