import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HrisMenuModule } from '@iapps/hris-menu';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RoutingModule } from '../app/app.routes';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HrisMenuModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
