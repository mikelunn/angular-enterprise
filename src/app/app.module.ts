import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FeaturesModule} from "./features/features.module";
import { MainComponent } from './layout/main/main.component';
import {ErrorComponent} from "./layout/error/error.component";
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {LayoutRoutingModule} from "./layout/layout.routing.module";
import {NavbarComponent} from "./layout/navbar/navbar.component";
import {HomeModule} from "./home/home.module";
import { NavMenuOverlayComponent } from './layout/nav-menu-overlay/nav-menu-overlay.component';
import { NavMenuItemComponent } from './layout/nav-menu-item/nav-menu-item.component';
import { NavButtonComponent } from './layout/nav-button/nav-button.component';
import { NavMenuBackComponent } from './layout/nav-menu-back/nav-menu-back.component';

@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    ErrorComponent,
    NavMenuOverlayComponent,
    NavMenuItemComponent,
    NavButtonComponent,
    NavMenuBackComponent
  ],
  imports: [
    HomeModule,
    LayoutRoutingModule,
    BrowserModule,
    FeaturesModule,
    CoreModule,
    SharedModule

  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
