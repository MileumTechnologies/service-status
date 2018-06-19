import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'overview' },
  { path: 'overview', loadChildren: './dashboard/modules/overview/overview.module#OverviewModule' },
  { path: 'tasks', loadChildren: './dashboard/modules/tasks/tasks.module#TasksModule'}
];

import { AppComponent } from './app.component';
import { MatToolbarModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    MatToolbarModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
