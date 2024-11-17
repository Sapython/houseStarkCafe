import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseStarkRoutingModule } from './house-stark-routing.module';
import { HouseStarkComponent } from './house-stark.component';


@NgModule({
  declarations: [
    HouseStarkComponent,
  ],
  imports: [
    CommonModule,
    HouseStarkRoutingModule
  ]
})
export class HouseStarkModule { }
