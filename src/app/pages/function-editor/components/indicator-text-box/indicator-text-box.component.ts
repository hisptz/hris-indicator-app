import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-indicator-text-box',
  templateUrl: './indicator-text-box.component.html',
  styleUrls: ['./indicator-text-box.component.css']
})
export class IndicatorTextBoxComponent implements OnInit {
  @Input() expressionFormula;
  @Output() expressionChanged: EventEmitter<any> = new EventEmitter<any>();
  @Output() cursorPosition: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {}

  onExpressionChange(event) {
    const textBoxElement = event ? event.srcElement : null;
    if (event) {
      this.expressionChanged.emit({
        mousePositionWithReferenceToExpression: textBoxElement
          ? textBoxElement.selectionStart
          : null,
        expression: event.target ? event.target.value : this.expressionFormula
      });
    }
  }

  fetchCursorPosition(event) {
    const textBoxElement = event ? event.srcElement : null;
    this.cursorPosition.emit(textBoxElement.selectionStart);
  }
}
