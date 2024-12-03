import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueExperienceSectionComponent } from './unique-experience-section.component';

describe('UniqueExperienceSectionComponent', () => {
  let component: UniqueExperienceSectionComponent;
  let fixture: ComponentFixture<UniqueExperienceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UniqueExperienceSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueExperienceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
