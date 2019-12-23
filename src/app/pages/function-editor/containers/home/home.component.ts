import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { State } from '../../../../store/reducers';

import { Fields } from '../../../../core/models/fields.model';
import { loadFields } from '../../../../store/actions/fields.action';
import { getCurrentFormFields } from '../../../../store/selectors/forms.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  fields$: Observable<Fields[]>;
  isLinear = false;

  constructor(private store: Store<State>) {
    this.store.dispatch(loadFields({}));
    this.fields$ = this.store.select(getCurrentFormFields);
  }

  saveForm() {}
  resetForm() {}

  ngOnInit() {}
}
