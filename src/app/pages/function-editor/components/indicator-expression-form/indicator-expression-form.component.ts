import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import * as _ from 'lodash';
@Component({
  selector: 'app-indicator-expression-form',
  templateUrl: './indicator-expression-form.component.html',
  styleUrls: ['./indicator-expression-form.component.css']
})
export class IndicatorExpressionFormComponent implements OnInit {
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
  cursorPositionOnExpression: number;
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

  onSetOperator(event, operation) {
    if (this.editorForm) {
      const expression = this.editorForm.value
        ? this.editorForm.value.expression
        : '';
      if (expression) {
        const newExpression = `${expression.slice(
          0,
          this.cursorPositionOnExpression
        )} ${operation} ${expression.slice(
          this.cursorPositionOnExpression,
          expression.length
        )}`;
        this.cursorPositionOnExpression =
          this.cursorPositionOnExpression + (operation.length + 2);
        this.editorForm.setValue({ expression: newExpression });
      }
    }
  }
  ngOnInit() {}
}
