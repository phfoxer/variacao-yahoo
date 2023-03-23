import { NgModule } from '@angular/core';

import { HomePage } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';


const route: Routes = [{
  path: '',
  component: HomePage
}]

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    MatTableModule
  ]
})
export class HomeModule { }
