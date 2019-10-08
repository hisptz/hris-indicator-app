import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-function-editor',
  templateUrl: './function-editor.component.html',
  styleUrls: ['./function-editor.component.css']
})
export class FunctionEditorComponent implements OnInit {
  expressionStatus = 'OK';
  @Input() editorMode;
  constructor() {}

  ngOnInit() {
    console.log(this.editorMode);
  }
}
