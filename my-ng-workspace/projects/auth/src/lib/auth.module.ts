import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import {CommonModule} from '@angular/common';


@NgModule({
    declarations: [AuthComponent, LoginComponent],
    imports: [
        CommonModule
    ],
    exports: [AuthComponent, LoginComponent]
})
export class AuthModule { }
