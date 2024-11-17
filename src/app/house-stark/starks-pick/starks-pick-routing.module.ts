import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarksPickComponent } from './starks-pick.component';

const routes: Routes = [{ path: '', component: StarksPickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StarksPickRoutingModule { }
