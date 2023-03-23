import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartPage } from './chart.component';
import { RouterModule, Routes } from '@angular/router';
import { NgApexchartsModule } from "ng-apexcharts";
const routes:Routes = [{
  path: '',
  component: ChartPage
}]

@NgModule({
  declarations: [
    ChartPage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgApexchartsModule
  ]
})
export class ChartModule { }
