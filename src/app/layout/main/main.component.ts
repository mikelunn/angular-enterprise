import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppState} from "../../core/store/index";
import {Observable} from "rxjs/Observable";
import {Layout, NavItem} from "../../core/store/layout/layout.model";
import {InitializeAction, MenuItemActivateAction} from "../../core/store/layout/layout.actions";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hasNavHistory$: Observable<boolean>;
  navButtonActive$: Observable<boolean>;
  navMenuTitle$: Observable<string>;
  currentNavItems$: Observable<NavItem[]>;

  navItems = [
    {
      name: 'Parent',
      icon: 'fa-wrench',
      route: '/account',
      children: [
        {
          name: 'Change Password',
          icon: 'fa-unlock',
          route: '/account/password'
        },
        {
          name: 'Another Parent',
          icon: 'fa-credit-card',
          route: '/account/payment',
          children: [
            {
              name: 'Payment Settings',
              icon: 'fa-credit-card',
              route: '/account/payment',
            },
            {
              name: 'Yet Another Parent',
              icon: 'fa-credit-card',
              route: '/account/payment',
              children: [
                {
                  name: 'Payment Settings',
                  icon: 'fa-credit-card',
                  route: '/account/payment',
                }
              ]
            }
          ]
        },
        {
          name: 'Transaction History',
          icon: 'fa-history',
          route: '/account/history'
        }
      ]
    },
    {
      name: 'Features',
      icon: 'fa-car',
      route: '/features'
    },
    {
      name: 'Currency',
      icon: 'fa-money',
      route: '/features/currency'
    }];

  constructor(public store: Store<AppState>) { }

  ngOnInit() {
    this.initNavMenu();
    this.initLayoutSubscriptions();
  }
  navigate(event) {
    console.log(event);
    this.store.dispatch(new MenuItemActivateAction(event));
  }
  private initNavMenu() {
    this.store.dispatch(new InitializeAction(this.navItems));
  }
  private initLayoutSubscriptions() {
    this.hasNavHistory$ = this.store.select(s => s.layout.previousNavItems.length > 0);
    this.currentNavItems$ = this.store.select(s => s.layout.currentNavItems);
    this.navButtonActive$ = this.store.select(s => s.layout.navButtonActive);
    this.navMenuTitle$ = this.store.select(s => s.layout.navMenuTitle);
  }

}
