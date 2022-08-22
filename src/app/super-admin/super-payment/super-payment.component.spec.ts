import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPaymentComponent } from './super-payment.component';

describe('SuperPaymentComponent', () => {
  let component: SuperPaymentComponent;
  let fixture: ComponentFixture<SuperPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPaymentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
