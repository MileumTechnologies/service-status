import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewModule } from './modules/overview/overview.module';

// const routes: Routes = [
//   { path: '/', pathMatch: 'full', redirectTo: '/overview' },
//   { path: '/overview', component: OverviewComponent }
// ]

@NgModule({
  imports: [
    // RouterModule.forChild(routes),
    OverviewModule
  ],
  declarations: [],
  providers: []
})
export class DashboardModule {

}
