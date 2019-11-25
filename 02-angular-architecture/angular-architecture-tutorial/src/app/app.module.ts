import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {SettingsModule} from '../settings/settings.module';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, FooterComponent
  ],
  imports: [
    BrowserModule, SettingsModule
  ],
  providers: [],
  // exports: [HeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
