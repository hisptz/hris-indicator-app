import { BaseState, initialBaseState } from '../states/base.state';
import { Form } from '../../core/models/form.model';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';

export interface FormState extends EntityState<Form>, BaseState {
  initialized: boolean;
  currentForm: string;
}

export const formAdapter: EntityAdapter<Form> = createEntityAdapter<Form>({
  sortComparer: null
});

export const initialFormState: FormState = formAdapter.getInitialState({
  ...initialBaseState,
  initialized: false,
  currentForm: ''
});
