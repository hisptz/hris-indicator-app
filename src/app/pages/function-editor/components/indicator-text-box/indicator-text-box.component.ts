import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
@Component({
  selector: 'app-indicator-text-box',
  templateUrl: './indicator-text-box.component.html',
  styleUrls: ['./indicator-text-box.component.css']
})
export class IndicatorTextBoxComponent implements OnInit {
  @Input() expressionFormula;
  @Input() editorMode;
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
    return textBoxElement.selectionStart;
  }
  setCursorPosition(event, cursorPosition) {
    const textBoxElement = event ? event.srcElement : null;
    textBoxElement.selectionStart(cursorPosition);
  }

  onSetCursorPosition(expression, cursorPosition) {
    var elem = document.getElementById(`${this.editorMode}-textarea`);
    elem.focus();
    elem.addEventListener('focus', event => {
      if (event) {
        const textBoxElement = event ? event.srcElement : null;
        // textBoxElement.selectionStart = cursorPosition;
      }
    });
  }
}
