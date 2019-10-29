import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import * as _ from 'lodash';

import { IndicatorTextBoxComponent } from '../indicator-text-box/indicator-text-box.component';
@Component({
  selector: 'app-indicator-expression-form',
  templateUrl: './indicator-expression-form.component.html',
  styleUrls: ['./indicator-expression-form.component.css']
})
export class IndicatorExpressionFormComponent implements OnInit {
  @Input() editorMode;
  @ViewChild(IndicatorTextBoxComponent, { static: false })
  indicatorTextBox: IndicatorTextBoxComponent;
  operations = [
    { name: 'add', icon: '+', operation: '+' },
    { name: 'substract', icon: '-', operation: '-' },
    { name: 'multiply', icon: '*', operation: '*' },
    { name: 'divide', icon: '/', operation: '/' },
    { name: 'modulus', icon: '%', operation: '%' },
    { name: 'greaterThan', icon: '>', operation: '>' },
    { name: 'greaterThanOrEqualTo', icon: '>=', operation: '>=' },
    { name: 'lessThan', icon: '<', operation: '<' },
    { name: 'lessThanOrEqualTo', icon: '<=', operation: '<=' },
    { name: 'equalsTo', icon: '==', operation: '==' },
    { name: 'isNotEqual', icon: '!=', operation: '!=' },
    { name: 'NOT', icon: 'NOT', operation: '!' },
    { name: 'AND', icon: 'AND', operation: '&&' },
    { name: 'OR', icon: 'OR', operation: '||' }
  ];
  editorForm: FormGroup;
  cursorPositionOnExpression: number = 0;
  constructor(private formBuilder: FormBuilder) {
    this.editorForm = this.formBuilder.group({
      expression: ''
    });
  }

  onExpressionChanges(updatedExpression) {
    this.cursorPositionOnExpression =
      updatedExpression.mousePositionWithReferenceToExpression;
    if (this.editorForm) {
      this.editorForm.setValue({ expression: updatedExpression.expression });
    }
  }
  onGetCursorPosition(cursorPosition) {
    this.cursorPositionOnExpression = cursorPosition;
  }

  setCursorPosition(expression) {
    this.indicatorTextBox.onSetCursorPosition(
      expression,
      this.cursorPositionOnExpression
    );
  }
  onSetOperator(event, operation) {
    var expression = '';
    if (this.editorForm) {
      expression = this.editorForm.value
        ? this.editorForm.value.expression
        : '';
      if (expression || expression == '') {
        const newExpression = `${expression.slice(
          0,
          this.cursorPositionOnExpression
        )} ${operation}${expression.slice(
          this.cursorPositionOnExpression,
          expression.length
        )}`;
        this.cursorPositionOnExpression =
          this.cursorPositionOnExpression + (operation.length + 1);
        this.editorForm.setValue({ expression: newExpression });
      }
    }

    this.setCursorPosition(expression);
  }
  onAppendFieldUid(fieldDetails) {
    const fieldUid = fieldDetails.id;
    var expression = '';
    if (this.editorForm) {
      expression = this.editorForm.value
        ? this.editorForm.value.expression
        : '';
      if (expression || expression == '') {
        const newExpression = `${expression.slice(
          0,
          this.cursorPositionOnExpression
        )} #{${fieldUid}} ${expression.slice(
          this.cursorPositionOnExpression,
          expression.length
        )}`;
        this.cursorPositionOnExpression =
          this.cursorPositionOnExpression + (fieldUid.length + 4);
        this.editorForm.setValue({ expression: newExpression });
      }
    }
    this.setCursorPosition(expression);
  }
  ngOnInit() {}
}
