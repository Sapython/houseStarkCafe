import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemAddedRoutingModule } from './item-added-routing.module';
import { ItemAddedComponent } from './item-added.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    ItemAddedComponent
  ],
  imports: [
    CommonModule,
    ItemAddedRoutingModule,
    CompsModule
  ]
})
export class ItemAddedModule { }
