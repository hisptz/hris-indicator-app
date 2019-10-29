import { BaseState, initialBaseState } from './base.state';
import { Fields } from '../../core/models/fields.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export interface FieldState extends EntityState<Fields>, BaseState {
  initialized: boolean;
}

export const fieldAdapter: EntityAdapter<Fields> = createEntityAdapter<Fields>({
  sortComparer: null
});

export const initialFieldsState: FieldState = fieldAdapter.getInitialState({
  ...initialBaseState,
  initialized: false
});
