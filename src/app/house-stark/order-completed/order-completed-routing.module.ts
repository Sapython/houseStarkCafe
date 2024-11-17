import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderCompletedComponent } from './order-completed.component';

const routes: Routes = [{ path: '', component: OrderCompletedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderCompletedRoutingModule { }
