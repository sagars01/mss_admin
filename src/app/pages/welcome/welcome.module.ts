import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { WelcomeComponent } from './welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginInlineComponent } from './navbar/login-inline/login-inline.component';
import { NzModalModule } from 'ng-zorro-antd/modal';


@NgModule({
  imports: [
    WelcomeRoutingModule,
    ReactiveFormsModule,
    NzFormModule,
    NzInputModule,
    NzModalModule,
  ],
  declarations: [WelcomeComponent, NavbarComponent, LoginInlineComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
