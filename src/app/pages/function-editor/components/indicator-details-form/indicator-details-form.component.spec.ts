import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorDetailsFormComponent } from './indicator-details-form.component';

describe('IndicatorExpessionFormComponent', () => {
  let component: IndicatorDetailsFormComponent;
  let fixture: ComponentFixture<IndicatorDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IndicatorDetailsFormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
