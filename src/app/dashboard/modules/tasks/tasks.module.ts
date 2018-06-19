import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
    MatTabsModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTableModule,
    MatCheckboxModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule
} from '@angular/material';

import { TasksComponent } from './tasks.component';
import { ListComponent } from './components/list/list.component';
import { CreateComponent } from './components/create/create.component';
import { CreateTaskNotificationComponent } from './components/notifications/create-task-notification.component';
import { TasksService } from './services/tasks.service';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: TasksComponent },
    { path: 'list', component: TasksComponent },
    { path: 'create', component: TasksComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        FormsModule,
        MatTabsModule,
        MatListModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatSnackBarModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatProgressSpinnerModule
    ],
    declarations: [
        TasksComponent,
        ListComponent,
        CreateComponent,
        CreateTaskNotificationComponent
    ],
    providers: [
        TasksService
    ],
    entryComponents: [
        CreateTaskNotificationComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TasksModule {

}
