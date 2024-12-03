import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularRecipesSectionComponent } from './popular-recipes-section.component';

describe('PopularRecipesSectionComponent', () => {
  let component: PopularRecipesSectionComponent;
  let fixture: ComponentFixture<PopularRecipesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PopularRecipesSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularRecipesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
