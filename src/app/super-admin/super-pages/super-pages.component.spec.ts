import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperPagesComponent } from './super-pages.component';

describe('SuperPagesComponent', () => {
  let component: SuperPagesComponent;
  let fixture: ComponentFixture<SuperPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperPagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
