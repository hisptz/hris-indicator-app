import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HrisMenuModule } from "@iapps/hris-menu";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { reducers, metaReducers } from "./store/reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { EffectsModule } from "@ngrx/effects";
import { effects } from "./store/effects";
import { routes, RoutingModule } from "./app.routes";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HrisMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
