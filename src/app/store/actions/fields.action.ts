import { createAction, props } from '@ngrx/store';
import { Fields } from '../../core/models/fields.model';

export const initializeFields = createAction('[Fields] Initialize Fields');

export const loadFields = createAction('[Fields] Load Fields', props<{}>());

export const loadFieldsSuccess = createAction(
  '[Fields] Load Fields Success',
  props<{ fields: Fields[] }>()
);
export const loadFieldsFailure = createAction(
  '[Fields] Load Fields Failure',
  props<{ error: any }>()
);
