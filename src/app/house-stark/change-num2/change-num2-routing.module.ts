import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNum2Component } from './change-num2.component';

const routes: Routes = [{ path: '', component: ChangeNum2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeNum2RoutingModule { }
