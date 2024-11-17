import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RpcRoutingModule } from './rpc-routing.module';
import { RpcComponent } from './rpc.component';
import { CompsModule } from 'src/app/components/comps.module';


@NgModule({
  declarations: [
    RpcComponent
  ],
  imports: [
    CommonModule,
    RpcRoutingModule,
    CompsModule
  ]
})
export class RpcModule { }
