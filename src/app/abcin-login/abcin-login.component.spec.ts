import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcinLoginComponent } from './abcin-login.component';

describe('AbcinLoginComponent', () => {
  let component: AbcinLoginComponent;
  let fixture: ComponentFixture<AbcinLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcinLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcinLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
