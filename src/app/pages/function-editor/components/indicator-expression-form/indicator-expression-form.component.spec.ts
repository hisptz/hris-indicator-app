import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorExpressionFormComponent } from './indicator-expression-form.component';

describe('IndicatorExpessionFormComponent', () => {
  let component: IndicatorExpressionFormComponent;
  let fixture: ComponentFixture<IndicatorExpressionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorExpressionFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorExpressionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
