import {NgModule, Optional, SkipSelf} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {HttpService} from "./services/http.service";
import {ActionReducer, combineReducers, StoreModule} from "@ngrx/store";
import {reducer} from "./store/index";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {RouterModule} from "@angular/router";
import {CurrencyEffects} from "./store/currency/currency.effects";
import {EffectsModule} from "@ngrx/effects";
import {compose} from "@ngrx/core/compose";
import {LayoutEffects} from "./store/layout/layout.effects";

// Reset the root state for HMR
// function stateSetter(reducer: ActionReducer<any>): ActionReducer<any> {
//   return function (state, action) {
//     if (action.type === 'SET_ROOT_STATE') {
//       return action.payload;
//     }
//     return reducer(state, action);
//   };
// }
// const rootReducer = compose(stateSetter, combineReducers)({
//   reducer
// });
// // Enable HMR and ngrx/devtools in hot reload mode
// if (process.env === 'dev') {
//   imports.push(...[
//     StoreDevtoolsModule.instrumentStore({
//       monitor: useLogMonitor({
//         visible: false,
//         position: 'right'
//       })
//     }),
//     StoreLogMonitorModule,
//   ]);
// }

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    StoreModule.provideStore(reducer),
    EffectsModule.run(CurrencyEffects),
    EffectsModule.run(LayoutEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [],
  providers: [
    HttpService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
