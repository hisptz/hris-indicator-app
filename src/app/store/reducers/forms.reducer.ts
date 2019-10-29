import { createReducer, on } from '@ngrx/store';

import {
  initializeForms,
  loadForms,
  loadFormsSuccess,
  loadFormsFailure,
  setCurrentForm
} from '../actions/forms.action';
import {
  initialFormState,
  FormState,
  formAdapter
} from '../states/forms.state';
import {
  loadingBaseState,
  loadedBaseState,
  errorBaseState
} from '../states/base.state';

export const reducer = createReducer(
  initialFormState,
  on(initializeForms, state => ({ ...state, initialized: true })),
  on(loadForms, state => ({
    ...state,
    ...loadingBaseState,
    loading: state.initialized ? state.loading : true,
    loaded: state.initialized ? state.loaded : false
  })),

  on(loadFormsSuccess, (state, { forms }) =>
    formAdapter.addMany(forms, {
      ...state,
      ...loadedBaseState
    })
  ),
  on(setCurrentForm, (state, { currentForm }) => ({
    ...state,
    currentForm: currentForm
  }))
);

export function formReducer(state, action): FormState {
  return reducer(state, action);
}
