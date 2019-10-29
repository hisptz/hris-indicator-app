import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IndicatorExpressionFormComponent } from '../../components/indicator-expression-form/indicator-expression-form.component';
@Component({
  selector: 'app-function-editor',
  templateUrl: './function-editor.component.html',
  styleUrls: ['./function-editor.component.css']
})
export class FunctionEditorComponent implements OnInit {
  expressionStatus = 'OK';
  @Input() editorMode;
  @Input() fields;
  @ViewChild(IndicatorExpressionFormComponent, { static: false })
  indicatorExpressionForm: IndicatorExpressionFormComponent;

  constructor() {}
  onClickField(field) {
    this.indicatorExpressionForm.onAppendFieldUid(field);
  }
  ngOnInit() {}
}
