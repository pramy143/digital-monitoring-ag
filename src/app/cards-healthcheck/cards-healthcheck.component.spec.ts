import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsHealthcheckComponent } from './cards-healthcheck.component';

describe('CardsHealthcheckComponent', () => {
  let component: CardsHealthcheckComponent;
  let fixture: ComponentFixture<CardsHealthcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsHealthcheckComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsHealthcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
