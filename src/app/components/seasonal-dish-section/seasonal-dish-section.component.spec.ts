import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalDishSectionComponent } from './seasonal-dish-section.component';

describe('SeasonalDishSectionComponent', () => {
  let component: SeasonalDishSectionComponent;
  let fixture: ComponentFixture<SeasonalDishSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeasonalDishSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalDishSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
