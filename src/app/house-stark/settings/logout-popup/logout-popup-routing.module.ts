import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogoutPopupComponent } from './logout-popup.component';

const routes: Routes = [{ path: '', component: LogoutPopupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogoutPopupRoutingModule { }
