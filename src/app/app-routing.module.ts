import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: 'app',
    loadChildren: () =>
      import('./house-stark/house-stark.module').then((m) => m.HouseStarkModule ),
  },
  {
    path:'',
    redirectTo:'app',
    pathMatch:'full'
  },
  { path: 'app', loadChildren: () => import('./house-stark/house-stark.module').then(m => m.HouseStarkModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
