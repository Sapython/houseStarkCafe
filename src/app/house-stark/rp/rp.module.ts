import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpRoutingModule } from './rp-routing.module';
import { RpComponent } from './rp.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    RpComponent
  ],
  imports: [
    CommonModule,
    RpRoutingModule,
    CompsModule
  ]
})
export class RpModule { }
