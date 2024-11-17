import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageAddressRoutingModule } from './manage-address-routing.module';
import { ManageAddressComponent } from './manage-address.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    ManageAddressComponent
  ],
  imports: [
    CommonModule,
    ManageAddressRoutingModule,
    CompsModule
  ]
})
export class ManageAddressModule { }
