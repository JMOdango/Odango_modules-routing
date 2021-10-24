import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingCardsComponent } from './trending-cards.component';

describe('TrendingCardsComponent', () => {
  let component: TrendingCardsComponent;
  let fixture: ComponentFixture<TrendingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
