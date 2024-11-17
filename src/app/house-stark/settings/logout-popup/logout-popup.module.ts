import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutPopupRoutingModule } from './logout-popup-routing.module';
import { LogoutPopupComponent } from './logout-popup.component';


@NgModule({
  declarations: [
    LogoutPopupComponent
  ],
  imports: [
    CommonModule,
    LogoutPopupRoutingModule
  ]
})
export class LogoutPopupModule { }
