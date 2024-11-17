import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangeNumComponent } from './change-num.component';

const routes: Routes = [{ path: '', component: ChangeNumComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangeNumRoutingModule { }
