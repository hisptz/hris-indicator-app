import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from '../../../../store/reducers';

import { Form } from '../../../../core/models/form.model';

import {
  loadForms,
  setCurrentForm
} from '../../../../store/actions/forms.action';
import { getAllForms } from '../../../../store/selectors/forms.selector';
@Component({
  selector: 'app-indicator-details',
  templateUrl: './indicator-details.component.html',
  styleUrls: ['./indicator-details.component.css']
})
export class IndicatorDetailsComponent implements OnInit {
  forms$: Observable<Form[]>;

  constructor(private store: Store<State>) {
    this.store.dispatch(loadForms({}));
    this.forms$ = this.store.select(getAllForms);
  }

  setCurrentForm(currentForm) {
    this.store.dispatch(setCurrentForm({ currentForm }));
  }
  ngOnInit() {}
}
