import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChangeNum2RoutingModule } from './change-num2-routing.module';
import { ChangeNum2Component } from './change-num2.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    ChangeNum2Component
  ],
  imports: [
    CommonModule,
    ChangeNum2RoutingModule,
    CompsModule
  ]
})
export class ChangeNum2Module { }
