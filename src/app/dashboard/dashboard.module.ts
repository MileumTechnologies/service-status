import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material';

import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'overview' },
      { path: 'overview', loadChildren: './modules/overview/overview.module#OverviewModule' },
      { path: 'tasks', loadChildren: './modules/tasks/tasks.module#TasksModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule
  ],
  declarations: [DashboardComponent],
  providers: []
})
export class DashboardModule { }
