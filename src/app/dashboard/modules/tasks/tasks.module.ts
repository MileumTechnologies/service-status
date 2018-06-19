import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatTabsModule, MatListModule, MatInputModule, MatSelectModule, MatButtonModule } from '@angular/material';

import { TasksComponent } from './tasks.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { TasksService } from './services/tasks.service';

const routes: Routes = [
    { path: '', component: TasksComponent },
    { path: 'list', component: TasksComponent },
    { path: 'create', component: TasksComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule
    ],
    declarations: [
        TasksComponent,
        ListComponent,
        CreateComponent
    ],
    providers: [
        TasksService
    ]
})
export class TasksModule {

}
