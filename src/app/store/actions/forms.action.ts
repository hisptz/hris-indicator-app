import { createAction, props } from '@ngrx/store';
import { Form } from '../../core/models/form.model';

export const initializeForms = createAction('[Forms] Initialize Forms');

export const loadForms = createAction('[Forms] Load Forms', props<{}>());

export const loadFormsSuccess = createAction(
  '[Forms] Load Forms Success',
  props<{ forms: Form[] }>()
);
export const loadFormsFailure = createAction(
  '[Forms] Load Forms Failure',
  props<{ error: any }>()
);

export const setCurrentForm = createAction(
  '[Forms] Set Current Form',
  props<{ currentForm: string }>()
);
