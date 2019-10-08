import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicatorTextBoxComponent } from './indicator-text-box.component';

describe('IndicatorTextBoxComponent', () => {
  let component: IndicatorTextBoxComponent;
  let fixture: ComponentFixture<IndicatorTextBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndicatorTextBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndicatorTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
