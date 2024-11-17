import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutDoneComponent } from './logout-done.component';

const routes: Routes = [{ path: '', component: LogoutDoneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogoutDoneRoutingModule { }
