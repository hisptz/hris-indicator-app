import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-indicator-details-form',
  templateUrl: './indicator-details-form.component.html',
  styleUrls: ['./indicator-details-form.component.css']
})
export class IndicatorDetailsFormComponent implements OnInit {
  indicatorDetailsForm: FormGroup;
  cursorPositionOnExpression: number;
  constructor(private formBuilder: FormBuilder) {
    this.indicatorDetailsForm = this.formBuilder.group({
      expression: ''
    });
  }

  ngOnInit() {}
}
