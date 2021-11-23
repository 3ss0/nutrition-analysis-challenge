import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionLayoutComponent } from './nutrition-layout.component';

describe('NutritionLayoutComponent', () => {
  let component: NutritionLayoutComponent;
  let fixture: ComponentFixture<NutritionLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NutritionLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NutritionLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
