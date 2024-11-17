import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyCartRoutingModule } from './empty-cart-routing.module';
import { EmptyCartComponent } from './empty-cart.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    EmptyCartComponent
  ],
  imports: [
    CommonModule,
    EmptyCartRoutingModule,
    CompsModule
  ]
})
export class EmptyCartModule { }
