import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';

import { environment } from '../../../environments/environment';

import { FormState } from '../states/forms.state';
import { formReducer } from './forms.reducer';

import { FieldState } from '../states/fields.state';
import { fieldReducer } from './fields.reducer';

export interface State {
  forms: FormState;
  fields: FieldState;
}

export const reducers: ActionReducerMap<State> = {
  forms: formReducer,
  fields: fieldReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? [storeFreeze]
  : [];

/**
 * Root state selector
 */
export const getRootState = (state: State) => state;
