import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';



@NgModule({
    declarations: [AuthComponent, LoginComponent],
    imports: [
    ],
    exports: [AuthComponent, LoginComponent]
})
export class AuthModule { }
