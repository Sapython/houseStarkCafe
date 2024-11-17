import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderPlacedRoutingModule } from './order-placed-routing.module';
import { OrderPlacedComponent } from './order-placed.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    OrderPlacedComponent
  ],
  imports: [
    CommonModule,
    OrderPlacedRoutingModule,
    CompsModule
  ]
})
export class OrderPlacedModule { }
