import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperSchedulerComponent } from './super-scheduler.component';

describe('SuperSchedulerComponent', () => {
  let component: SuperSchedulerComponent;
  let fixture: ComponentFixture<SuperSchedulerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperSchedulerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperSchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
