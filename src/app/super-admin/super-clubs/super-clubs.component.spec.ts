import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperClubsComponent } from './super-clubs.component';

describe('SuperClubsComponent', () => {
  let component: SuperClubsComponent;
  let fixture: ComponentFixture<SuperClubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperClubsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperClubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
