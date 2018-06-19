import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatSelectModule
} from '@angular/material';

import { OverviewComponent } from './overview.component';

const routes: Routes = [
    { path: '', component: OverviewComponent }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        MatToolbarModule,
        MatListModule,
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatSelectModule
    ],
    declarations: [
        OverviewComponent
    ],
    providers: []
})
export class OverviewModule {

}
