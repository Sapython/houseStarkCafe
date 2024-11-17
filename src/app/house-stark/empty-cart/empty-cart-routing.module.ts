import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyCartComponent } from './empty-cart.component';

const routes: Routes = [{ path: '', component: EmptyCartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmptyCartRoutingModule { }
