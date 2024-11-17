import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogoutDoneRoutingModule } from './logout-done-routing.module';
import { LogoutDoneComponent } from './logout-done.component';


@NgModule({
  declarations: [
    LogoutDoneComponent
  ],
  imports: [
    CommonModule,
    LogoutDoneRoutingModule
  ]
})
export class LogoutDoneModule { }
