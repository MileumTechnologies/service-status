import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './components/tasks.component';
import { TasksService } from './services/tasks.service';

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
  providers: [TasksService]
})
export class TasksModule { }
