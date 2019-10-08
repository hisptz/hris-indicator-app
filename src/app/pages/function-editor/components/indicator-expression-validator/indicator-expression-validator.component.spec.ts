import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorExpessionValidatorComponent } from './indicator-expression-validator.component';

describe('IndicatorExpessionValidatorComponent', () => {
  let component: IndicatorExpessionValidatorComponent;
  let fixture: ComponentFixture<IndicatorExpessionValidatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorExpessionValidatorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorExpessionValidatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
