import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';

import { FunctionEditorRoutingModule } from './function-editor-routing.module';

import { FunctionEditorComponent } from './containers/function-editor/function-editor.component';
import { IndicatorTextBoxComponent } from './components/indicator-text-box/indicator-text-box.component';
import { IndicatorExpressionFormComponent } from './components/indicator-expression-form/indicator-expression-form.component';
import { IndicatorExpressionValidatorComponent } from './components/indicator-expression-validator/indicator-expression-validator.component';
import { IndicatorDetailsFormComponent } from './components/indicator-details-form/indicator-details-form.component';
import { IndicatorDetailsComponent } from './containers/indicator-details/indicator-details.component';
import { HomeComponent } from './containers/home/home.component';

@NgModule({
  declarations: [
    FunctionEditorComponent,
    IndicatorTextBoxComponent,
    IndicatorExpressionFormComponent,
    IndicatorExpressionValidatorComponent,
    IndicatorDetailsFormComponent,
    IndicatorDetailsComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatStepperModule,
    FunctionEditorRoutingModule
  ]
})
export class FunctionEditorModule {}
