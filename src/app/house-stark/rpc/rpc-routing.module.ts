import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RpcComponent } from './rpc.component';

const routes: Routes = [{ path: '', component: RpcComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RpcRoutingModule { }
