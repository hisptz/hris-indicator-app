import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-indicator-details-form',
  templateUrl: './indicator-details-form.component.html',
  styleUrls: ['./indicator-details-form.component.css']
})
export class IndicatorDetailsFormComponent implements OnInit {
  @Input() formsList;
  @Output() onSetCurrentForm: EventEmitter<string> = new EventEmitter();
  indicatorDetailsForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.indicatorDetailsForm = this.formBuilder.group({
      form: ['', Validators.required],
      name: [''],
      shortName: [''],
      code: [''],
      description: [''],
      aggregationType: [''],
      analyticsType: ['']
    });
  }

  ngOnInit() {}

  setCurrentForm(event) {
    if (event) {
      event.stopPropagation();
    }
    this.onSetCurrentForm.emit(this.indicatorDetailsForm.value.form);
  }
}
