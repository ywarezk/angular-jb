import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {SettingsModule} from '../settings/settings.module';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent
  ],
  imports: [
    BrowserModule, SettingsModule
  ],
  providers: [],
  // exports: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
