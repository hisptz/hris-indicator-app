import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HrisMenuModule } from '@iapps/hris-menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../app/app.routes';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HrisMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
