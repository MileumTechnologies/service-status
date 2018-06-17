import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './components/tasks.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list' },
  { path: 'list', loadChildren: './modules/list/list.module#ListModule' },
  { path: 'create', loadChildren: './modules/create/create.module#CreateModule' }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [TasksComponent],
  providers: [],
  entryComponents: [TasksComponent]
})
export class TasksModule { }
