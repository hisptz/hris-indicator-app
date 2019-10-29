import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Form } from '../../core/models/form.model';
import { formAdapter, FormState } from '../states/forms.state';
import { getRootState, State } from '../reducers';

import * as _ from 'lodash';

const getFormState = createSelector(
  getRootState,
  (state: State) => state.forms
);

export const {
  selectEntities: getFormsEntities,
  selectAll: getAllForms
} = formAdapter.getSelectors(getFormState);

export const getFormsInitializedStatus = createSelector(
  getFormState,
  (state: FormState) => state.initialized
);

export const getFormsLoadingStatus = createSelector(
  getFormState,
  (state: FormState) => state.loading
);

export const getCurrentFormStatus = createSelector(
  getFormState,
  (state: FormState) => state.currentForm
);

export const getCurrentFormFields = createSelector(
  getFormState,
  getAllForms,
  getCurrentFormStatus,
  (state, forms, currentFormUid) => {
    return _.get(_.find(forms, { id: currentFormUid }), 'formFields');
  }
);
