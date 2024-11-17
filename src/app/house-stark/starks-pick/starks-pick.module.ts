import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarksPickRoutingModule } from './starks-pick-routing.module';
import { StarksPickComponent } from './starks-pick.component';


@NgModule({
  declarations: [
    StarksPickComponent
  ],
  imports: [
    CommonModule,
    StarksPickRoutingModule
  ]
})
export class StarksPickModule { }
