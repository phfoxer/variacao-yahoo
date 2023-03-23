import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'chart',
    loadChildren: () => import('src/app/pages/chart/chart.module').then((m) => m.ChartModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
