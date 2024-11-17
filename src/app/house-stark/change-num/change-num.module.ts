import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeNumRoutingModule } from './change-num-routing.module';
import { ChangeNumComponent } from './change-num.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    ChangeNumComponent
  ],
  imports: [
    CommonModule,
    ChangeNumRoutingModule,
    CompsModule
  ]
})
export class ChangeNumModule { }
