/**
 * Created by complunm on 5/19/2017.
 */
import {Component, OnInit} from '@angular/core';
import * as fromRoot from '../../core/store';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs/Observable";
import * as EntityActions from '../../core/store/entity/entity.actions';
import {slices} from "../../core/store/util";
import {Currency} from "../../core/store/currency/currency.model";
@Component({
  templateUrl: './currency.page.html'
})
export class CurrencyPage implements OnInit {
  loading: Observable<boolean>;

  constructor(private store: Store<fromRoot.AppState>) {}

  ngOnInit() {
    this.loading = this.store.select(s => s.currency.loading);
    this.load();
  }
  load() {
    this.store.dispatch(new EntityActions.Load<Currency>(slices.CURRENCY));

  }
}
