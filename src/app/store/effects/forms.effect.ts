import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import {
  initializeForms,
  loadForms,
  loadFormsSuccess,
  loadFormsFailure
} from '../actions/forms.action';
import { FormsService } from '../../core/services/forms.service';
import { map, concatMap, withLatestFrom, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { State } from 'src/app/store/reducers';
import { Form } from '../../core/models/form.model';
import { forms } from '../../constants/form-payload';
// import { go } from 'src/app/store/actions/router.actions';
import * as _ from 'lodash';
// import { getUrl } from 'src/app/store/selectors/router.selectors';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';

@Injectable()
export class FormsEffects {
  constructor(
    private actions$: Actions,
    private formsService: FormsService,
    private store: Store<State>
  ) {}

  loadForms$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loadForms),
        map(() => {
          //   console.log(forms);
          this.store.dispatch(loadFormsSuccess({ forms }));
        })
      ),
    { dispatch: false }
  );
}
