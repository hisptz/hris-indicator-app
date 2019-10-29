import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { Fields } from '../../core/models/fields.model';
import { fieldAdapter, FieldState } from '../states/fields.state';
import { getRootState, State } from '../reducers';

import * as _ from 'lodash';

const getFieldState = createSelector(
  getRootState,
  (state: State) => state.fields
);

export const {
  selectEntities: getFieldsEntities,
  selectAll: getAllFields
} = fieldAdapter.getSelectors(getFieldState);

export const getFieldsInitializedStatus = createSelector(
  getFieldState,
  (state: FieldState) => state.initialized
);
export const getFieldsLoadingStatus = createSelector(
  getFieldState,
  (state: FieldState) => state.loading
);
export const getFieldsInFormsStatus = createSelector(
  getFieldState,
  getAllFields,
  (state, allFields: [FieldState, any]) => {}
);
