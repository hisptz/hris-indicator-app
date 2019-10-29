import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  initializeFields,
  loadFields,
  loadFieldsSuccess,
  loadFieldsFailure
} from '../actions/fields.action';
import { FieldsService } from '../../core/services/fields.service';
import { map, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Fields } from '../../core/models/fields.model';
import { fields } from '../../constants/fields-payload';
// import { go } from 'src/app/store/actions/router.actions';
import * as _ from 'lodash';
// import { getUrl } from 'src/app/store/selectors/router.selectors';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class FieldsEffects {
  constructor(
    private actions$: Actions,
    private fieldsService: FieldsService,
    private store: Store<State>
  ) {}

  loadForms$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadFields),
        map(() => {
          //   console.log(forms);
          this.store.dispatch(loadFieldsSuccess({ fields }));
        })
      ),
    { dispatch: false }
  );
}
