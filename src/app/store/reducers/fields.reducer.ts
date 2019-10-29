import { createReducer, on } from '@ngrx/store';

import {
  initializeFields,
  loadFields,
  loadFieldsSuccess,
  loadFieldsFailure
} from '../actions/fields.action';
import {
  initialFieldsState,
  FieldState,
  fieldAdapter
} from '../states/fields.state';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';

export const reducer = createReducer(
  initialFieldsState,
  on(initializeFields, state => ({ ...state, initialized: true })),
  on(loadFields, state => ({
    ...state,
    ...loadingBaseState,
    loading: state.initialized ? state.loading : true,
    loaded: state.initialized ? state.loaded : false
  })),
  on(loadFieldsSuccess, (state, { fields }) =>
    fieldAdapter.addMany(fields, {
      ...state,
      ...loadedBaseState
    })
  )
);

export function fieldReducer(state, action): FieldState {
  return reducer(state, action);
}
