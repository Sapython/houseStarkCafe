import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemAddedComponent } from './item-added.component';

const routes: Routes = [{ path: '', component: ItemAddedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemAddedRoutingModule { }
