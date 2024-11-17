import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderCompletedRoutingModule } from './order-completed-routing.module';
import { OrderCompletedComponent } from './order-completed.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    OrderCompletedComponent
  ],
  imports: [
    CommonModule,
    OrderCompletedRoutingModule,
    CompsModule
  ]
})
export class OrderCompletedModule { }
