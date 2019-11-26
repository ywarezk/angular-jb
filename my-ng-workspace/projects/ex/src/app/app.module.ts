import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AuthModule } from 'auth'
// import { MessageService } from './services/message.service';
import { ColorMeDirective } from './color-me.directive';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ColorMeDirective
    ],
    imports: [
        BrowserModule,
        AuthModule
    ],
    // providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule { }
