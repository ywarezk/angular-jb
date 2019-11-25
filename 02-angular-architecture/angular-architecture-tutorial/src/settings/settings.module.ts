import { NgModule } from '@angular/core';
import {UserComponent} from './user/user.component';

@NgModule({
    declarations: [UserComponent],
    exports: [UserComponent]
})
export class SettingsModule {

}